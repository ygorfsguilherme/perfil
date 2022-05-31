export class Carrossel{
	constructor(element){
		this.elementTarget = element.target;
		this.elementCount = element.countCard;
		this.elementPosition = element.position;
		this.index = 0;
	}

	start(time = 3500){
		setInterval(()=>{
			this.move()
		}, time);
	}

	move(){
		this.index++

		if(this.index > this.elementCount){
			this.index = 0;
		}

		let posicao_x = `${-this.index * this.elementPosition}px`;

		this.elementTarget.style.transform = `translateX(${posicao_x})`
	}
}