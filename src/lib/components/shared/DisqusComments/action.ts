const mountNewDisqus = ({ identifier, url, siteName }: { identifier: string, url: string, siteName: string }) => {
    const config = document.createElement('script');
    config.id = 'disqus-config-block';
    config.type = 'text/javascript';
    config.innerHTML =
        `const disqus_config = function () { this.page.url = '${url}'; this.page.identifier = '${identifier}'; };`;
    document.head.appendChild(config);

    const disqus = document.createElement('script');
    disqus.id = 'disqus-app-block';
    disqus.src = `https://${siteName}.disqus.com/embed.js`;
    disqus.setAttribute('data-timestamp', `${+new Date()}`);
    (document.head || document.body).appendChild(disqus);

    return true;
}

const unmountDisqus = () => {
    const blocksToRemove: string[] = ['disqus-config-block', 'disqus-app-block'];
    blocksToRemove.forEach((blockId) => {
        const block = document.getElementById(blockId);
        if (block) block.remove();
    });
    return true
}

export default function DisqusThread(node: Element, params: { identifier: string, url: string, siteName: string }) {
    if (!params.identifier || params.identifier === window.location.pathname)
        console.warn("Warning: disqus-svelte Comments created without 'identifier' property. This is not recommended & default settings are not guaranteed to work.");

    const thread = document.createElement('div');
    thread.id = 'disqus_thread';
    node.appendChild(thread);

    mountNewDisqus(params);

    return {
        update(new_params: { identifier: string, url: string, siteName: string }) {
            unmountDisqus();
            mountNewDisqus(new_params);
        },

        destroy() {
            unmountDisqus();
        }
    };
}