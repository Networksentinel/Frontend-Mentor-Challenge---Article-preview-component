import './style.css'

const shareButton = document.getElementById('share-button');
const shareIcon = document.getElementById('share-icon');
const tooltip = document.getElementById('tooltip');

shareButton.addEventListener('click', () => {
  shareButton.classList.toggle('bg-gray-500');
  shareIcon.classList.toggle('text-white');
  tooltip.classList.toggle('hidden');
});