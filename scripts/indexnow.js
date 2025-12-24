const host = 'wealthsimple-referral-canada.vercel.app';
const key = 'f91a46b41f9548f590ccdd2ba618988d';
const urlList = [
    `https://${host}/`,
    `https://${host}/fr`,
];

async function submitToIndexNow() {
    const data = {
        host,
        key,
        keyLocation: `https://${host}/${key}.txt`,
        urlList,
    };

    try {
        const response = await fetch('https://api.indexnow.org/IndexNow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('Successfully submitted URLs to IndexNow.');
        } else {
            console.error(`Failed to submit URLs. Status: ${response.status}`);
            const errorText = await response.text();
            console.error('Error response:', errorText);
        }
    } catch (error) {
        console.error('Error during IndexNow submission:', error);
    }
}

submitToIndexNow();
