async function showcode() {
    const codeInput = document.getElementById('codeInput').value;
    const resultMessage = document.getElementById('resultMessage');
    const output = document.getElementById('output');
    const text = document.getElementById('o1');
    
    // Add validation for empty input
    if (!codeInput) {
        resultMessage.textContent = 'Please enter a code';
        resultMessage.style.color = 'red';
        return;
    }

    // Add console log to debug
    console.log('Sending code:', codeInput);

    try {
        // Show loading state
        resultMessage.textContent = 'Verifying...';
        resultMessage.style.color = 'blue';

        // Update the fetch URL to point to your Vercel hosted backend
        const response = await fetch('https://your-vercel-app.vercel.app/api/backend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: parseInt(codeInput) })
        });

        console.log('Response received:', response);

        const data = await response.json();
        console.log('Data:', data);

        if (data.found) {
            output.style.display = 'block';
            text.textContent = 'Successfully verified!';
            text.style.color = 'green';
        } else if (!data.found) {
            output.style.display = 'none';
            text.textContent = 'Invalid access code!';
            text.style.color = 'red';
        } else {
            output.style.display = 'none';
            output.textContent = 'Error occurred while verifying code. Check if server is running.';
            output.style.color = 'red';
        }
    } catch (error) {
        console.error('Error:', error);
        resultMessage.textContent = 'Error occurred while verifying code. Check if server is running.';
        resultMessage.style.color = 'red';
    }
}

// Add event listener for Enter key
document.getElementById('codeInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        showcode();
    }
});

// Add console log to confirm script loading
console.log('Frontend script loaded');
