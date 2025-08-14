from abc import ABC, abstractmethod

# Estrategia abstracta
class RenderStrategy(ABC):
    @abstractmethod
    def render(self, icon_data):
        pass

# Estrategias concretas
class LineArtStrategy(RenderStrategy):
    def render(self, icon_data):
        print("Renderizando en línea art:", icon_data)

class FlatFillStrategy(RenderStrategy):
    def render(self, icon_data):
        print("Renderizando con relleno plano:", icon_data)

class IsometricStrategy(RenderStrategy):
    def render(self, icon_data):
        print("Renderizando isométrico:", icon_data)

# Contexto
class IconContext:
    def __init__(self, data):
        self.data = data
        self._strategy: RenderStrategy = LineArtStrategy()

    def set_strategy(self, strategy: RenderStrategy):
        self._strategy = strategy

    def draw(self):
        self._strategy.render(self.data)

# Uso
if __name__ == "__main__":
    ctx = IconContext("geometría de cara frontal")
    ctx.draw()  # línea art por defecto

    ctx.set_strategy(FlatFillStrategy())
    ctx.draw()

    ctx.set_strategy(IsometricStrategy())
    ctx.draw()
