document.getElementById('n9').addEventListener('click', () => {
    const key = parseInt(document.getElementById('n7').value ? document.getElementById('n7').value : 0);
    const inputMsg = document.getElementById('n5').value;
    const output = document.getElementById('n11');
    let res = "";
    inputMsg.split('').forEach(ch => {
        res += String.fromCharCode((ch.charCodeAt(0) + key)%65535);
    });
    output.innerText = res;
});