const openUrlInNewTab = imageUrl => chrome.tabs.create({ url: imageUrl });

document.getElementById('fullProfileImageBtn').addEventListener('click', () => {
    chrome.tabs.query({ active: true }, tabs => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id, allFrames: true },
            function: () => {
                return document.querySelector(`[data-imgperflogname="profileCoverPhoto"]`).src;
            },
        }, (results) => {
            if (results) {                    
                const imageUrl = results[0].result;                
                if (imageUrl) {                    
                    openUrlInNewTab(imageUrl);
                }
            }
        });
    });
});