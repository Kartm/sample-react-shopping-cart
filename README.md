Mock-up:
<img src="./empty-cart.jpg">
<img src="./grid-cart.jpg">

Final result:
<img src="./final.jpg">

Zadanie polega na stworzeniu prostego widoku produktów oraz koszyka na jednej stronie. Całość składa się z dwóch części:
a) Grid z produktami.
b) Koszyk zakupowy.

Wytyczne:
a) Projekt musi działać prawidłowo na wszystkich popularnych przeglądarkach.
b) Grid produktów oraz koszyk zakupowy powinny być responsywne.
c) Przedmioty do wyświetlenia w grid znajdują się w pliku items.json i mają następujące właściwości:
- id
- tytuł
- okładka (URL)
- cena
- dostępność
- waluta
d) Przedmioty w koszyku powinny wyświetlać 2 dodatkowe informacje:
- ilość
- wartość (cena * ilość)
e) Każdy dostępny przedmiot można dodać do koszyka za pomocą przycisku "Add to cart".
f) Dodanie istniejącego przedmiotu do koszyka powinno zwiększać jego ilość.
g) Powinno dać się usunąć każdą pozycję z koszyka.
h) W koszyku powinna znajdować się aktualna wartość przedmiotów.

Stack:
- React 16+
- Redux (przechowywanie stanu koszyka)
- SCSS
- Nieobowiązkowo: dowolne biblioteki, które mogą ułatwić Ci pracę

Wskazówki:
- W plikach empty-card.jpg i grid-cart.jpg znajdują się schematy jak taki widok może wyglądać.
- Zadanie to ma na celu zweryfikować Twoje podejście do niektórych problemów, ciekawe rozwiązania, a niekoniecznie przedstawienie "gotowego produktu". Jeśli więc jakiś fragment zajmuje Ci za dużo czasu - pomiń go i przejdź dalej. Chcielibyśmy bowiem, aby zadanie nie zajęło Ci więcej niż 4 godziny.
- Korzystaj z dobrych praktyk. Pamiętaj o rozszerzalności, komponentyzacji. Mimo, że projekt nie musi być idealny, to jednak potraktuj go tak, jakby miał być użyty i rozwijany w dużym projekcie

