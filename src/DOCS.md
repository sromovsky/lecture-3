# Mačuha Jakub

---

### GET - *Main Page*
app.get('/', (req: Request, res: Response) =>

https://localhost:3000/

---
### GET - *Get all PlayList*
app.get('/PlayList', (req: Request, res: Response) =>

https://localhost:3000/PlayList

---
### GET - *Get trackId PlayList*
app.get('/PlayList/:trackId', (req: Request, res: Response) =>

https://localhost:3000//PlayList/:trackId

---
### GET - *Get artistName PlayList*

app.get('/PlayList//:artistName', (req: Request, res: Response) =>

https://localhost:3000//PlayList//:artistName

pri pouziti // zobrazi vsetky zaznami zadaneho interpreta

---
### PUT - _Update entry from PlayList_

app.put('/PlayList/:trackId', (req: Request, res: Response) =>

https://localhost:3000//PlayList/:trackId

Musim si z Get metody vybrat interpreta ktoreho chcem upravit 
a vlozim ho do raw body v formate JSON  , potom ked upravim hodnoty 
stlacim send a v playliste sa zobrazia uz tieto zmenene hodnoty 

---
### POST - _Create new user_
app.post('/PlayList', (req: Request, res: Response) =>

https://localhost:3000/PlayList

ak chceme vytvorit novy zaznam v PlayList potrebujeme si vziat strukturu
niektoreho zannamu z GET. tu strukturu vlozim a upravim jej obsah si 
zmenim aby obsahoval novy zaznam do PlayList
to vlozim raw body v formate JSON bez id
kedze id sa vytvori automaticky pri vykonani POST. 
---

---
### DELETE - _Delete entry from PlayList_
app.delete('/PlayList/:trackId', (req: Request, res: Response) =>

https://localhost:3000/PlayList/:trackId

zmaze zaznam z PlayList podla id-cka

---
