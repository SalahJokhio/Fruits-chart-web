document.addEventListener('DOMContentLoaded', () => {
    const fruits = [
        { name: 'Apple', description: 'Apples are sweet and crunchy fruits.', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Banana', description: 'Bananas are rich in potassium.', image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Cherry', description: 'Cherries are small and red.', image: 'https://images.unsplash.com/photo-1528821099448-43ccebfbb899?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Date', description: 'Dates are sweet and chewy.', image: 'https://images.unsplash.com/photo-1614061811858-dde54a522f5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Elderberry', description: 'Elderberries are used in syrups.', image: 'https://images.unsplash.com/photo-1661896265359-a7eef1d01125?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Fig', description: 'Figs are soft and sweet.', image: 'https://images.unsplash.com/photo-1571337547740-a56ef4b5aa05?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Grape', description: 'Grapes come in clusters.', image: 'https://images.unsplash.com/photo-1573574635896-36753f4e38bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Honeydew', description: 'Honeydews are juicy melons.', image: 'https://images.unsplash.com/photo-1571575173700-afb9492e6a50?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Indian Fig', description: 'Indian figs are prickly pears.', image: 'https://plus.unsplash.com/premium_photo-1674007584834-271ef37d2387?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Jackfruit', description: 'Jackfruits are large tropical fruits.', image: 'https://images.unsplash.com/photo-1569294860071-b2ac12ee73b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Kiwi', description: 'Kiwis are small and brown.', image: 'https://images.unsplash.com/photo-1572539280469-9c738c59964d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Lemon', description: 'Lemons are sour citrus fruits.', image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Mango', description: 'Mangoes are tropical and sweet.', image: 'https://media.istockphoto.com/id/1219928747/photo/still-life-with-avocado-and-citrus-close-up-on-white-background-isolated-fruits-look-tasty.jpg?s=1024x1024&w=is&k=20&c=tMGMGF2Nq4mwV_p2nknlt9PhDixDIbTvLSavVO7M1m8=' },
        { name: 'Nectarine', description: 'Nectarines are similar to peaches.', image: 'https://images.unsplash.com/photo-1628364251782-52941ea94dfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmVjdGFyaW5lc3xlbnwwfHwwfHx8MA%3D%3D' },
        { name: 'Orange', description: 'Oranges are rich in vitamin C.', image: 'https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Papaya', description: 'Papayas are tropical fruits.', image: 'https://images.unsplash.com/photo-1581242335635-ce8631489ac5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Quince', description: 'Quinces are hard and sour.', image: 'https://images.unsplash.com/photo-1573841261518-bc164773c66d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Raspberry', description: 'Raspberries are small and red.', image: 'https://images.unsplash.com/photo-1604520024836-a8cde7f2610e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Strawberry', description: 'Strawberries are sweet and juicy.', image: 'https://images.unsplash.com/photo-1655745570225-d92558d90e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Tomato', description: 'Tomatoes are used in salads.', image: 'https://images.unsplash.com/photo-1596199050105-6d5d32222916?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRvbWF0b3xlbnwwfHwwfHx8MA%3D%3Dhttps://via.placeholder.com/200x150?text=Tomato' }
    ];

    const cardContainer = document.getElementById('card-container');

    function renderCards() {
        cardContainer.innerHTML = '';
        fruits.forEach((fruit, index) => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <img src="${fruit.image}" alt="${fruit.name}">
                <div class="description">${fruit.description}</div>
                <button class="delete" data-index="${index}">Delete</button>
            `;

            cardContainer.appendChild(card);

            card.querySelector('.delete').addEventListener('click', () => {
                fruits.splice(index, 1);
                renderCards();
            });
        });
    }

    renderCards();
});
