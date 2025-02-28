import fs from "fs";
import path from "path";

const docsRoot = path.resolve(__dirname, "../"); // docs 目录

function getSidebar() {
  const files = fs.readdirSync(path.join(docsRoot));
  return files
    .filter((file) => {
      return (
        file.endsWith(".md") && file !== "README.md" && file !== "index.md"
      );
    }) // 仅筛选 Markdown 文件
    .map((file) => ({
      text: file.replace(".md", ""), // 文档标题
      link: `/${file.replace(".md", "")}`, // 生成链接
    }));
}

export function generateSidebar() {
  return [
    {
      text: "文档",
      collapsible: true,
      items: getSidebar(), // 读取 `docs` 目录中的所有文件
    },
  ];
}
