const Database = require('./db');
const saveOrphanage = require('./saveOrphanage.js')
const orphanage1 =     {
    lat: "-27.222633", 
    lng: "-49.6455874",
    name: "Lar das Meninas",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "123456789",
    images: [
        "https://images.unsplash.com/photo-1603138461420-e24168721842?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        "https://images.unsplash.com/photo-1596908905631-7fe2dd220d24?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
    opening_hours: "Horário de visita Das 18h até as 8h",
    opening_on_weekends: "0"
};


Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, orphanage1);
    
    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    //consultar somente 1 orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "8"');
    console.log(orphanage);

    //deletar dado da tabela 
    //console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'))
    //console.log(await db.run('DELETE FROM orphanages'))
});