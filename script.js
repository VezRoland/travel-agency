const createCard = ({ name, info, image, price }) => {
	const card = document.createElement('section')
	card.className = 'card rounded-lg dark:text-white overflow-hidden group'
	card.onclick = () => card.toggleAttribute('open')

	const cardHeader = document.createElement('header')
	cardHeader.classList = 'relative group-open:pb-60 transition-all duration-500 list-none'

	const cardTitle = document.createElement('div')
	cardTitle.className = 'flex items-center gap-6 p-6 bg-white/75 dark:bg-zinc-900/75  group-open:bg-zinc-300 group-open:dark:bg-zinc-800 transition duration-500'

	const cardName = document.createElement('h2')
	cardName.textContent = name
	cardName.className = 'font-semibold'

	const cardPrice = document.createElement('span')
	cardPrice.textContent = `$${price}`
	cardPrice.className = 'text-zinc-600 dark:text-zinc-400'

	const cardIcon = document.createElement('i')
	cardIcon.className = 'fa-solid fa-chevron-right h-max ml-auto group-open:rotate-90 transition duration-500'

	const cardCover = document.createElement('img')
	cardCover.src = image
	cardCover.className = '-z-10 absolute left-0 top-0 w-full h-full object-cover'

	const cardContent = document.createElement('div')
	cardContent.className = 'grid grid-rows-[0fr] group-open:grid-rows-[1fr] p-0 group-open:p-6 bg-zinc-300 dark:bg-zinc-800 transition duration-500'
	cardContent.style.transition = '0.5s'

	const cardDescription = document.createElement('p')
	cardDescription.textContent = info
	cardDescription.className = 'overflow-hidden'

	cardTitle.append(cardName, cardPrice, cardIcon)
	cardHeader.append(cardTitle, cardCover)
	cardContent.appendChild(cardDescription)
	card.append(cardHeader, cardContent)
	return card
}

const renderCards = data => {
	const cards = document.querySelector('.cards')
	cards.innerHTML = ''
	data.map(card => cards.appendChild(card))
}	

const getData = async (url) => {
	const response = await fetch(url)
	return await response.json()
}

getData('https://raw.githubusercontent.com/mkatay/json-tours/main/tours')
	.then(data => renderCards(data.map(d => createCard(d))))

// Theme handling
const setTheme = () => {
	const icon = document.querySelector('#theme-icon')

	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		icon.classList.replace('fa-moon', 'fa-sun')
		document.documentElement.classList.add('dark')
	} else {
		icon.classList.replace('fa-sun', 'fa-moon')
		document.documentElement.classList.remove('dark')
	}
}

const switchTheme = () => {
	const icon = document.querySelector('#theme-icon')
	localStorage.theme = icon.classList.contains('fa-moon') ? 'dark' : 'light'
	setTheme()
}

setTheme()

tailwind.config = {
	darkMode: 'class'
}