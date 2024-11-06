"use client";
import { useState } from "react";
import "../../utils/style.css";
import useAddDirctory from "../../hooks/useAddDirectory";
import useRenameDirctory from "../../hooks/useRenameDirectory";
import useDeleteDirectory from "../../hooks/useDeleteDirectory";
import { Input } from "../common/input";
import { FileDirectoryProps, IFolderStructure } from "../../utils/types";

export default function FileDirectory({ folderData, refresh = () => { } }: FileDirectoryProps) {

    const [showChild, setShowChild] = useState(false);
    const [showAddButton, setShowAddButton] = useState(false);
    const [showEditButton, setShowEditButton] = useState(false);

    const { mutate: addDirectory } = useAddDirctory();

    const { mutate: renameDirectory } = useRenameDirctory();

    const { mutate: deleteDirectory } = useDeleteDirectory();

    const handleToggleChild = () => {
        setShowChild(!showChild);
    };

    const handleAddDirectory = (name: string) => {
        if (name) {
            const isFile = name.includes(".");

            const directoryData: IFolderStructure = {
                name,
                type: isFile ? "file" : "folder",
                parentId: (folderData.id as number) || null
            };

            addDirectory(directoryData, {
                onSuccess: () => refresh(),
            });
        }
    };

    // Rename folder/file functionality
    const handleRename = (newName: string) => {
        if (newName) {
            const isFile = newName.includes(".") || folderData.type === "file";
            const updatedData: IFolderStructure = {
                name: newName,
                type: isFile ? "file" : "folder",
                parentId: (folderData.id as number) || null
            };
            renameDirectory(
                {
                    id: folderData.id as number,
                    data: updatedData
                },
                {
                    onSuccess: () => {
                        refresh();
                    }
                })
        }
    };

    // Delete folder/file functionality
    const handleDelete = () => {
        const confirmDelete = window.confirm(`Are you sure you want to delete "${folderData.name}"?`);
        if (confirmDelete) {
            const type = folderData.type === "file" ? "file" : "folder";
            deleteDirectory({ id: (folderData.id as number), type }, {
                onSuccess: () => {
                    refresh();
                },
            });
        }
    };

    return (
        <div className="container">
            <h2>
                { folderData?.type === "folder" ? (showChild ? "📂" : "📁") : "📄" }
                { showEditButton ?
                    <Input name={ folderData.name } saveDirectory={ handleRename } cancel={ () => setShowEditButton(false) } />
                    :
                    <>
                        <span onClick={ handleToggleChild }>{ folderData.name }</span>

                        {/* buttons */ }
                        { folderData.type === "folder" &&
                            <span onClick={ () => setShowAddButton(true) } className="button">➕</span>
                        }
                        { folderData.parentId !== null &&
                            <>
                                <span onClick={ () => setShowEditButton(true) } className="button">✍🏻</span>
                                <span onClick={ handleDelete } className="button">❌</span>
                            </>
                        }
                    </>
                }
            </h2>
            { showAddButton && <Input saveDirectory={ handleAddDirectory } cancel={ () => setShowAddButton(false) } /> }
            { showChild &&
                folderData?.children?.map((child: any, index: number) => (
                    <FileDirectory key={ index } folderData={ child } refresh={ refresh } />
                )) }
        </div>
    );
}
