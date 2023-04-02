"use client"

import React from "react"
import { CuretLeft, File, Folder, FolderOpen } from "./icons"
import classNames from "classnames"

export default function FileBrowser() {
 const projects = {
    "wispy": {
        "src": {
            "components": {
                "another": {
                    "FileBrowser.tsx": "tsx"
                },
                "FileBrowser.tsx": "tsx",
                "Menu.tsx": "tsx",
                "Navigation.tsx": "tsx",
                "Sidebar.tsx": "tsx",
            },
            "pages": {
                "index.tsx": "tsx",
            },
            "styles": {
                "global.css": "css",
            },
            "utils": {
                "client.ts": "ts",
                "server.ts": "ts",
            },
            "App.tsx": "tsx",
            "index.tsx": "tsx",
        },
        "package.json": "json",
        "tsconfig.json": "json",
        "yarn.lock": "lock",
    },
    "wispy-2": {
        "src": {
            "components": {
                "FileBrowser.tsx": "tsx",
                "Menu.tsx": "tsx",
                "Navigation.tsx": "tsx",
                "Sidebar.tsx": "tsx",
            },
            "pages": {
                "index.tsx": "tsx",
            },
            "styles": {
                "global.css": "css",
            },
            "utils": {
                "client.ts": "ts",
                "server.ts": "ts",
            },
            "App.tsx": "tsx",
            "index.tsx": "tsx",
        },
        "package.json": "json",
        "tsconfig.json": "json",
        "yarn.lock": "lock",
    },
 }
 
    const [openFolders, setOpenFolders] = React.useState<string[]>([])
    const [selectedFile, setSelectedFile] = React.useState<string>("")
    const [selectedFolder, setSelectedFolder] = React.useState<string>("")

    const toggleFolder = (folder: string) => {
        if (openFolders.includes(folder)) {
            setOpenFolders(openFolders.filter((f) => f !== folder))
        } else {
            setOpenFolders([...openFolders, folder])
        }
    }

    const renderFolder = (folder: string, structure: any) => {
        const isOpen = openFolders.includes(folder)
        const isSelected = selectedFolder === folder
        return (
            <div key={folder}>
                <div
                    className={`flex text-white-transparent-80 items-center font-bold text-base leading-5 cursor-pointer ${isSelected ? "bg-[#2f2f2f]" : ""}`}
                    onClick={() => toggleFolder(folder)}
                >
                    {<CuretLeft className={
                        classNames(
                            "transform transition-transform duration-200",
                            {
                                "rotate-90": isOpen,
                                "rotate-0": !isOpen,
                            }
                        )}/>}
                    {isOpen ? (<FolderOpen/>) : (<Folder/>)}
                    <div className="line-clamp-1">{folder}</div>
                </div>
                {isOpen && renderStructure(structure)}
            </div>
        )
    }

    const renderFile = (file: string, extension: string) => {
        const isSelected = selectedFile === file
        return (
            <div
                key={file}
                title={file}
                className={`flex text-white-transparent-80 items-center font-bold text-base leading-5 cursor-pointer ${
                    isSelected ? "bg-white-transparent-10" : ""
                }`}
                onClick={() => setSelectedFile(file)}
            >
                <File fileExtension={extension}/>
                <div className="line-clamp-1">{file}</div>
            </div>
        );
    }

    const renderStructure = (structure: any) => {
        // display project structure and root folder
        return (
            <div className="pl-4">
                {Object.keys(structure).map((key) => {
                    if (typeof structure[key] === "object") {
                        return renderFolder(key, structure[key])
                    } else {
                        return renderFile(key, structure[key])
                    }
                }
                )}
            </div>
        )

    }
    
  return (
    <div className="py-2 px-3 text-white-transparent-80">
        {renderStructure(projects)}
    </div>
  )
}
