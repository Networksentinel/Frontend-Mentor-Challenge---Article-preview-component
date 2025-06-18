import './style.css'

const shareButton = document.getElementById('share-button');
const shareIcon = document.getElementById('share-icon');
const tooltip = document.getElementById('tooltip');
const tooltipLinks = document.querySelectorAll('#tooltip a');

function showTooltip() {
  tooltip.classList.remove('opacity-0', 'invisible');
  tooltip.classList.add('opacity-100', 'visible');
}

function hideTooltip() {
  tooltip.classList.remove('opacity-100', 'visible');
  tooltip.classList.add('opacity-0', 'invisible');
}

shareButton.addEventListener('click', () => {
  shareButton.classList.toggle('bg-gray-500');
  shareIcon.classList.toggle('text-white');

    if (tooltip.classList.contains('invisible')) {
        showTooltip();
    } else {
        hideTooltip();
    }
});

tooltipLinks.forEach(link => {
  link.addEventListener('click', () => {
    hideTooltip();
    shareButton.classList.toggle('bg-gray-500');
    shareIcon.classList.toggle('text-white');
  })});