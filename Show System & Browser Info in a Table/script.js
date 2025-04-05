addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('infoTable');

    //Extracting the actual browser's name.
    function getBrowserName() {
        const userAgent = navigator.userAgent;
        if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) return "Google Chrome";
        if (userAgent.includes("Firefox")) return "Mozilla Firefox";
        if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) return "Apple Safari";
        if (userAgent.includes("Edg")) return "Microsoft Edge";
        if (userAgent.includes("Opera") || userAgent.includes("OPR")) return "Opera";
        if (userAgent.includes("MSIE") || userAgent.includes("Trident")) return "Internet Explorer";
        return "Unknown Browser";
    }

    const info = [
        { name: 'Browser Name', value: getBrowserName() },
        { name: 'Screen Width & Height', value: `${screen.width} x ${screen.height}` },
        { name: 'OS Platform', value: `${navigator.platform}` },
        { name: 'User-Agent', value: `${navigator.userAgent}` }
    ];

    info.forEach(item => {
        const row = document.createElement('tr');
        const propertyCell = document.createElement('td');
        const valueCell = document.createElement('td');

        propertyCell.innerText = item.name;
        valueCell.innerText = item.value;

        row.appendChild(propertyCell);
        row.appendChild(valueCell);

        tableBody.appendChild(row);
    });
})
