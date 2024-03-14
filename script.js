function AppViewModel() {
    var self = this;

    // Array osservabile per tenere traccia degli elementi
    self.items = ko.observableArray(["Elemento 1", "Elemento 2"]);

    // Variabile osservabile per tenere traccia del nuovo elemento
    self.newItem = ko.observable("");

    // Funzione per aggiungere un nuovo elemento
    self.addItem = function() {
        if (self.newItem() !== "") {
            self.items.push(self.newItem());
            self.newItem(""); // Resetta il campo di input
        }
    };

    // Funzione per rimuovere un elemento
    self.removeItem = function(item) {
        self.items.remove(item);
    };
}
