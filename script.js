// Hàm preview ảnh cho Avatar và QR
function previewImage(input, displayId) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => document.getElementById(displayId).src = e.target.result;
        reader.readAsDataURL(input.files[0]);
    }
}

// Hàm preview và set ảnh nền
function previewBg(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('cardBg').style.backgroundImage = `url('${e.target.result}')`;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Lắng nghe các thanh trượt để căn chỉnh trực tiếp
document.addEventListener('input', function() {
    // Căn chỉnh QR
    const qrX = document.getElementById('qrX').value;
    const qrY = document.getElementById('qrY').value;
    document.getElementById('displayQR').style.transform = `translate(${qrX}px, ${qrY}px)`;

    // Căn chỉnh Nền
    const opacity = document.getElementById('bgOpacity').value;
    const scale = document.getElementById('bgScale').value;
    const bg = document.getElementById('cardBg');
    bg.style.opacity = opacity;
    bg.style.transform = `scale(${scale})`;
});

function updateInfo() {
    // Random ID và Time
    document.getElementById('displayId').innerText = Math.floor(100000000 + Math.random() * 900000000);
    document.getElementById('displayTime').innerText = new Date().toLocaleString('vi-VN');
    
    // Text
    document.getElementById('displayName').innerText = document.getElementById('inputName').value || "N/A";
    document.getElementById('displayHobby').innerText = document.getElementById('inputHobby').value || "N/A";
}

function downloadCard() {
    const area = document.getElementById('captureArea');
    html2canvas(area, { useCORS: true, scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'card-npc.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}
