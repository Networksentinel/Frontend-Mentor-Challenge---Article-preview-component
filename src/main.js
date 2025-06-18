import './style.css'

// Get the share button, share icon, tooltip, and tooltip links from the DOM
const shareButton = document.getElementById('share-button');
const shareIcon = document.getElementById('share-icon');
const tooltip = document.getElementById('tooltip');
const tooltipLinks = document.querySelectorAll('#tooltip a');

// Function that shows the tooltip
function showTooltip() {
  tooltip.classList.remove('opacity-0', 'invisible');
  tooltip.classList.add('opacity-100', 'visible');
}

// Function that hides the tooltip
function hideTooltip() {
  tooltip.classList.remove('opacity-100', 'visible');
  tooltip.classList.add('opacity-0', 'invisible');
}

// Event listener for the share button - makes the tooltip visible or hidden on click
shareButton.addEventListener('click', () => {
  shareButton.classList.toggle('bg-gray-500');
  shareIcon.classList.toggle('text-white');

    if (tooltip.classList.contains('invisible')) {
        showTooltip();
    } else {
        hideTooltip();
    }
});

// Event listeners for tooltip links - hides the tooltip when a link is clicked
tooltipLinks.forEach(link => {
  link.addEventListener('click', () => {
    hideTooltip();
    shareButton.classList.toggle('bg-gray-500');
    shareIcon.classList.toggle('text-white');
  })});