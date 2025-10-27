

const dev = document.getElementById('dev');

setInterval(() => {
    let date = new Date();
    dev.innerHTML = `
    <div style="text-align: center; font-size: 100px;">
    ${date.toLocaleDateString()}
    </div>
    <br>
    <div style="text-align: center; font-size: 100px; ">
    ${date.toLocaleTimeString()}
    </div>`;
}, 1000);
