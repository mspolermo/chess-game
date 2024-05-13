import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }
    
    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;
    
        // Рассчитываем разницу в координатах между текущей позицией короля и целевой ячейкой
        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);
    
        // Проверяем, что разница в координатах не превышает 1 по вертикали или горизонтали
        if (dx <= 1 && dy <= 1) {
            // Проверяем, что целевая ячейка либо пуста, либо занята фигурой противника
            
            if (target.isEmpty() || this.cell.isEnemy(target)) {
                return true;
            }
        }
        return false
    }
}