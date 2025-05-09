// Wait for the DOM to fully load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Dynamic Text Content
    const textContent = document.getElementById('text-content');
    const changeTextBtn = document.getElementById('change-text');
    
    // Array of sample texts to cycle through
    const sampleTexts = [
        "This text has been changed using JavaScript!",
        "JavaScript makes web pages interactive.",
        "You can manipulate DOM elements dynamically.",
        "The Document Object Model (DOM) represents the page structure."
    ];
    
    let textIndex = 0;
    
    changeTextBtn.addEventListener('click', function() {
        textIndex = (textIndex + 1) % sampleTexts.length;
        textContent.textContent = sampleTexts[textIndex];
    });
    
    // 2. Style Modification
    const styleTarget = document.getElementById('style-target');
    const changeColorBtn = document.getElementById('change-color');
    const changeSizeBtn = document.getElementById('change-size');
    const resetStylesBtn = document.getElementById('reset-styles');
    
    // Array of colors to cycle through
    const colors = ['#ffcccb', '#c2f0c2', '#c2e2f0', '#f0e5c2', '#e5c2f0'];
    let colorIndex = 0;
    
    changeColorBtn.addEventListener('click', function() {
        colorIndex = (colorIndex + 1) % colors.length;
        styleTarget.style.backgroundColor = colors[colorIndex];
        styleTarget.style.color = '#333';
        styleTarget.style.transition = 'all 0.3s ease';
    });
    
    changeSizeBtn.addEventListener('click', function() {
        // Toggle between normal and larger text
        if (styleTarget.style.fontSize === '1.5em') {
            styleTarget.style.fontSize = '1em';
            styleTarget.style.padding = '15px';
        } else {
            styleTarget.style.fontSize = '1.5em';
            styleTarget.style.padding = '20px';
        }
    });
    
    resetStylesBtn.addEventListener('click', function() {
        styleTarget.style.backgroundColor = '';
        styleTarget.style.color = '';
        styleTarget.style.fontSize = '';
        styleTarget.style.padding = '';
    });
    
    // 3. Element Addition/Removal
    const elementContainer = document.getElementById('element-container');
    const addElementBtn = document.getElementById('add-element');
    const removeElementBtn = document.getElementById('remove-element');
    
    // Track how many elements we've added
    let elementCount = 0;
    
    addElementBtn.addEventListener('click', function() {
        // Create a new element
        const newElement = document.createElement('div');
        elementCount++;
        
        // Set its properties
        newElement.className = 'dynamic-element';
        newElement.id = 'dynamic-element-' + elementCount;
        newElement.innerHTML = `
            <h3>Dynamic Element #${elementCount}</h3>
            <p>This element was created and added to the DOM using JavaScript.</p>
        `;
        
        // Add animation effect
        newElement.style.opacity = '0';
        
        // Add to the container
        elementContainer.appendChild(newElement);
        
        // Trigger animation
        setTimeout(function() {
            newElement.style.transition = 'opacity 0.5s ease';
            newElement.style.opacity = '1';
        }, 10);
    });
    
    removeElementBtn.addEventListener('click', function() {
        // Get all dynamic elements
        const dynamicElements = document.getElementsByClassName('dynamic-element');
        
        // Remove the last one if any exist
        if (dynamicElements.length > 0) {
            const lastElement = dynamicElements[dynamicElements.length - 1];
            
            // Add fade-out effect
            lastElement.style.transition = 'opacity 0.5s ease';
            lastElement.style.opacity = '0';
            
            // Remove after transition completes
            setTimeout(function() {
                elementContainer.removeChild(lastElement);
            }, 500);
        }
    });

    // Bonus: Theme toggle functionality
    const mainTitle = document.getElementById('main-title');
    let darkMode = false;
    
    mainTitle.addEventListener('dblclick', function() {
        darkMode = !darkMode;
        
        if (darkMode) {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#fff';
            mainTitle.style.color = '#4CAF50';
        } else {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
            mainTitle.style.color = '';
        }
    });
});
