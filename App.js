// Текущий пользователь (по умолчанию авто-вход как WorldSviat или Обычный юзер)
const currentUser = {
    username: "WorldSviat",
    nickname: "WorldSviat",
    role: "creator" // 'creator', 'admin', или 'user'
};

// Мок-данные тикетов
let tickets = [
    {
        id: 1,
        authorNickname: "WorldSviat",
        authorUsername: "WorldSviat",
        role: "creator",
        title: "Добро пожаловать на форум поддержки PrivaXion!",
        body: "Здесь вы можете задавать вопросы, сообщать о багах и предлагать новые фичи."
    }
];

function init() {
    renderProfile();
    renderTickets();
}

function renderProfile() {
    const profileBar = document.getElementById('user-profile-bar');
    let badgeClass = currentUser.role === 'creator' ? 'badge-creator' : (currentUser.role === 'admin' ? 'badge-admin' : 'badge-user');
    let roleName = currentUser.role === 'creator' ? 'Создатель' : (currentUser.role === 'admin' ? 'Админ' : 'Пользователь');

    profileBar.innerHTML = `
        <span><b>${currentUser.nickname}</b> (@${currentUser.username})</span>
        <span class="badge ${badgeClass}">${roleName}</span>
    `;
}

function renderTickets() {
    const list = document.getElementById('posts-list');
    list.innerHTML = '';

    tickets.forEach(t => {
        let badgeClass = t.role === 'creator' ? 'badge-creator' : (t.role === 'admin' ? 'badge-admin' : 'badge-user');
        let roleName = t.role === 'creator' ? 'Создатель' : (t.role === 'admin' ? 'Админ' : 'Юзер');

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 10px;">
                <div>
                    <b>${t.authorNickname}</b> <small style="color:var(--text-muted)">@${t.authorUsername}</small>
                    <span class="badge ${badgeClass}">${roleName}</span>
                </div>
            </div>
            <h3 style="margin: 0 0 10px 0; color:var(--primary);">${t.title}</h3>
            <p style="color:var(--text);">${t.body}</p>
        `;
        list.appendChild(card);
    });
}

function createTicket() {
    const title = document.getElementById('ticket-title').value;
    const body = document.getElementById('ticket-body').value;

    if (!title || !body) return alert('Заполните все поля!');

    tickets.unshift({
        id: Date.now(),
        authorNickname: currentUser.nickname,
        authorUsername: currentUser.username,
        role: currentUser.role,
        title: title,
        body: body
    });

    document.getElementById('ticket-title').value = '';
    document.getElementById('ticket-body').value = '';
    renderTickets();
}

document.addEventListener('DOMContentLoaded', Святавав
