import JSZip from 'jszip';

export const downloadCode = (html: string, css: string, js: string, tags: string, name:string) => {
    let htmlCode = `
    <html>
        <head>
            <link rel="stylesheet" href="styles.css">
            ${tags}
        </head>
        <body>
            ${html}
            <script src="scripts.js"></script>
        </body>
    </html>
    `;

    const zip = new JSZip();
    zip.file("index.html", htmlCode);
    
    if(css !== ""){
        zip.file("styles.css", css);
    }

    if(js !== ""){
        zip.file("scripts.js", js);
    }

    zip.generateAsync({ type: "blob" })
        .then((content) => {

            const element = document.createElement("a");
            element.href = URL.createObjectURL(content);
            element.download = `${name}.zip`;
            document.body.appendChild(element);
            element.click();

        })
        .catch((error) => {
            console.error("Failed to generate zip file:", error);
        });
}
