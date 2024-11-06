const Folder = require('../models/folderModel');
const File = require('../models/fileModel');

async function createItem(req, res) {
  try {
    const { name, type, parentId } = req.body;

    if (!['folder', 'file'].includes(type)) {
      return res.status(400).json({
        message: 'Invalid type. It should be either "folder" or "file".',
      });
    }

    let newItem;
    if (type === 'folder') {
      newItem = await Folder.create({ name, type, parentId });
    } else if (type === 'file') {
      newItem = await File.create({ name, type, parentId });
    }

    return res.status(201).json({
      message: `${type.charAt(0).toUpperCase() + type.slice(1)} created successfully`,
      item: newItem,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: `Error creating`,
      error: err.message,
    });
  }
}

async function getFolderStructure(req, res) {
  try {
    const folders = await Folder.findAll();
    const files = await File.findAll();

    const buildStructure = (parentId) => {
      const directory = [];

      const subfolders = folders.filter(folder => folder.parentId === parentId);

      for (const folder of subfolders) {
        const folderStructure = {
          id: folder.id,
          name: folder.name,
          type: folder.type,
          children: buildStructure(folder.id),
        };
        directory.push(folderStructure);
      }

      const subfiles = files.filter(file => file.parentId === parentId);

      for (const file of subfiles) {
        const fileStructure = {
          id: file.id,
          name: file.name,
          type: file.type,
        };
        directory.push(fileStructure);
      }

      return directory;
    };

    const rootStructure = {
      name: "File Explorer",
      type: "folder",
      parentId: null,
      children: buildStructure(null),
    };

    return res.status(200).json({
      message: 'Folder structure fetched successfully',
      structure: rootStructure,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: 'Error fetching folder structure',
      error: err.message,
    });
  }
}
async function updateItem(req, res) {
  try {
    const { id } = req.params;
    const { name, type } = req.body;

    if (!['folder', 'file'].includes(type)) {
      return res.status(400).json({
        message: 'Invalid type. It should be either "folder" or "file".',
      });
    }

    let item;
    if (type === 'folder') {
      item = await Folder.findByPk(id);
    } else if (type === 'file') {
      item = await File.findByPk(id);
    }

    if (!item) throw new Error(`${id} is not found`);

    item.name = name || item.name;
    item.type = type || item.type;

    await item.save();

    return res.status(200).json({
      message: `${type.charAt(0).toUpperCase() + type.slice(1)} updated successfully`,
      item,
    });
  } catch (err) {
    return res.status(404).json({
      message: `Error updating ${err}`,
      error: err.message,
    });
  }
}

async function deleteItem(req, res) {
  try {
    const { id } = req.params;
    const { type } = req.body;

    if (!['folder', 'file'].includes(type)) {
      return res.status(400).json({
        message: 'Invalid type. It should be either "folder" or "file".',
      });
    }

    let item;
    if (type === 'folder') {
      item = await Folder.findByPk(id);
      if (!item) throw new Error('Folder not found');

      await Folder.destroy({ where: { parentId: id } });
      await File.destroy({ where: { parentId: id } });
    } else if (type === 'file') {
      item = await File.findByPk(id);
      if (!item) throw new Error('File not found');
    }

    await item.destroy();

    return res.status(200).json({
      message: `${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully`,
    });
  } catch (err) {
    return res.status(404).json({
      message: `Error deleting ${err}`,
      error: err.message,
    });
  }
}


module.exports = {
  createItem,
  updateItem,
  deleteItem,
  getFolderStructure,
};
