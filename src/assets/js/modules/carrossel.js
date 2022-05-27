export class Carrossel{
	constructor(element){
		this.elementTarget = element.target;
		this.elementCount = element.countCard;
		this.elementIndex = element.index;
		this.elementPosition = element.position;
		this.elementLimite = element.limite;
	}

	move(){
		this.elementIndex++
		if(this.elementIndex > this.elementCount -this.elementLimite){
			this.elementIndex = 0;
		}

		let posicao_x = `${-this.elementIndex * this.elementPosition}px`;

		this.elementTarget.style.transform = `translateX(${posicao_x})`
	}
}