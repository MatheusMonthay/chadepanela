// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Audio elements
    const bgMusic = document.getElementById('background-music');
    const invitationAudio = document.getElementById('invitation-audio');
    const playBtn = document.getElementById('playInvitationBtn');
    
    // Modal elements
    const modal = document.getElementById('confirmModal');
    const modalButton = document.getElementById('modalButton');
    const confirmMatheusBtn = document.getElementById('confirmMatheus');
    const confirmKarinyBtn = document.getElementById('confirmKariny');
    
    // Initialize the page
    function init() {
        // Show the intro section
        document.getElementById('intro').style.display = 'flex';
        
        // Start background music
        playBackgroundMusic();
        
        // Setup invitation audio button
        setupInvitationAudio();
        
        // Setup modal functionality
        setupModal();
    }
    
    // Background music control
    async function playBackgroundMusic() {
        try {
            bgMusic.volume = 0.5; // Set lower volume for background music
            await bgMusic.play();
        } catch (error) {
            console.log('Background music error:', error);
            // Fallback: Show a message or button to start music
        }
    }
    
    // Invitation audio control
    function setupInvitationAudio() {
        playBtn.addEventListener('click', async function() {
            // If already playing, stop it
            if (!invitationAudio.paused) {
                invitationAudio.pause();
                invitationAudio.currentTime = 0;
                playBtn.textContent = '▶ Ouvir Convite';
                playBtn.classList.remove('playing');
                bgMusic.play();
                return;
            }
            
            try {
                // Pause background music
                bgMusic.pause();
                
                // Play invitation audio
                invitationAudio.volume = 1.0;
                invitationAudio.currentTime = 0;
                await invitationAudio.play();
                
                // Update button state
                playBtn.textContent = '⏹ Parar Convite';
                playBtn.classList.add('playing');
                
                // When audio ends, return to normal state
                invitationAudio.onended = function() {
                    playBtn.textContent = '▶ Ouvir Convite';
                    playBtn.classList.remove('playing');
                    bgMusic.play();
                };
                
            } catch (error) {
                console.log('Error playing invitation:', error);
                playBtn.textContent = '❌ Erro ao Reproduzir';
                setTimeout(() => {
                    playBtn.textContent = '▶ Ouvir Convite';
                }, 2000);
                bgMusic.play();
            }
        });
    }
    
    // Modal control
    function setupModal() {
        // Open modal
        modalButton.addEventListener('click', function() {
            modal.style.display = 'block';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Confirmation buttons
        confirmMatheusBtn.addEventListener('click', function() {
            confirmPresence("556999176206", "Héber");
        });
        
        confirmKarinyBtn.addEventListener('click', function() {
            confirmPresence("556993090445", "Vitória");
        });
    }
    
    // Confirm presence via WhatsApp
    function confirmPresence(phoneNumber, contactName) {
        const message = `Olá ${contactName}, confirmo minha presença no Chá de Panela no dia 03/05/2025!`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
        
        // Close modal
        modal.style.display = 'none';
    }
    
    // Start everything
    init();
});