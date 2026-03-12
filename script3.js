let open = false;

// --- availability sync with PHP ---

async function sync() {
  try {
    const res = await fetch('availability.php');
    const data = await res.json();
    if (typeof data.open === 'boolean') {
      open = data.open;
    }
    updateUI();
  } catch (e) {
    console.error('sync error', e);
  }
}

async function save() {
  try {
    await fetch('availability.php', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `open=${open ? 1 : 0}`
    });
  } catch (e) {
    console.error('save error', e);
  }
}

function updateUI() {
  const circle = document.getElementById('1');
  const text = document.getElementById('2');
  const sw = document.getElementById('7');

  if (circle) {
    circle.style.backgroundColor = open ? 'rgb(75,214,47)' : 'rgb(214,47,47)';
  }
  if (text) {
    text.textContent = open ? "I'm available..." : "I'm unavailable...";
  }
  if (sw) {
    sw.style.justifyContent = open ? 'end' : 'start';
    sw.style.backgroundColor = open ? 'rgb(75,214,47)' : 'rgb(214,47,47)';
  }
}

// --- page logic (masterkey + switch) ---

document.addEventListener('DOMContentLoaded', () => {
  // Password stuff (login page)
  const passbox = document.getElementById('3');
  const btn = document.getElementById('5');
  const masterkey = document.getElementById('6');

  if (masterkey) masterkey.style.display = 'none';

  if (btn && passbox) {
    btn.onclick = () => {
      if (passbox.value === '0') {
        if (masterkey) masterkey.style.display = 'flex';
      } else {
        location.href = 'index.html';
      }
    };
  }

  // Availability: load current status on every page
  sync();

  // Switch (main page)
  const sw = document.getElementById('7');
  if (sw) {
    sw.onclick = async () => {
      open = !open;
      await save();
      updateUI();
    };
  }
});
