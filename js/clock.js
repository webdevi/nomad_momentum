const $clock = document.querySelector('.clock');
// document loding event    
document.addEventListener('DOMContentLoaded', () => {
    clockTick();
    setInterval(clockTick, 1000);
});

// clockTick : 시간 표시 함수 
function clockTick(){
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    $clock.innerHTML = `${String(hour).padStart(2, 0)}:${String(minute).padStart(2,0)}:${String(second).padStart(2, 0)}`;
}