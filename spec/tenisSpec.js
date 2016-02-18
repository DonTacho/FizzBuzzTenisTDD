describe("Tenis", function() {
    var tenis;
    var player1;

    beforeEach(function() {
        tenis = new Tenis();
        player1 = new Player();
    });

    describe("El marcador es cero a cero", function() {
        // caso especifico
        it("Marcador 0 - 0 ", function() {
            expect(tenis.score[0]).toBe(0);
            expect(tenis.score[1]).toBe(0);
        });
    });
    describe("Un jugador tiene 15 puntos", function() {
        // caso especifico
        it("Marcador 15 - 0 ", function() {
            player1.setPelotas(1);
            expect(player1.getScore()).toBe(15);
        });
    });
    describe("Un jugador tiene 30 puntos", function() {
        // caso especifico
        it("Marcador 30 - 0 ", function() {
            player1.setPelotas(2);
            expect(player1.getScore()).toBe(30);
        });
    });
});

