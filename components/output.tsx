interface OutputProps {
    html: string;
    css: string;
    js: string;
    tags: string;
}

export const Output = ({html, css, js, tags}:OutputProps) => {
    return (
        <div className="w-full h-full bg-background block rounded-lg p-4 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <iframe
                title="output"
                srcDoc={`
                    <html>
                        <head>
                            <style>${css}</style>
                            ${tags}
                        </head>
                        <body>
                            ${html}
                            <script>${js}</script>
                        </body>
                    </html>
                `}
                className="w-full h-full"
            ></iframe>
        </div>
    );
}