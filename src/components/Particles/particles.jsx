import React, { useEffect, useRef } from 'react';

function drawSnow(ctx, snowflakes) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'white';

    for (let snowflake of snowflakes) {
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function updateSnow(snowflakes, speed, ctx) {
    for (let snowflake of snowflakes) {
        snowflake.y += speed;
        if (snowflake.y > 1800) {
            snowflake.y = 0;
        }
    }
}


function SnowComponent() {
    const canvasRef = useRef(null);
    const ctx = useRef(null);
    const snowflakes = [
        { x: 100, y: 0, radius: 10 },
        { x: 200, y: 0, radius: 15 },
        { x: 300, y: 0, radius: 20 }
    ];


    useEffect(() => {
        const canvas = canvasRef.current;
        ctx.current = canvas.getContext('2d');
    }, []);

    useEffect(() => {
        function draw() {
            updateSnow(snowflakes, 5, ctx);
            drawSnow(ctx.current, snowflakes);
            requestAnimationFrame(draw);
        }
        draw();
    }, []);

    return <canvas ref={canvasRef} width={500} height={500} />;
}

export default SnowComponent;

