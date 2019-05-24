class Computer {}


class ComputerBuilder {
  constructor() {
    this.computer = null;
  }

  createComputer() {
    this.computer = new Computer();

    this.installMotherboard();
    this.installProcessor();
    this.installMemory();
    this.installVideoCard();
    this.installHardDrive();
  }

  installMotherboard() {
    this.computer.motherboard = new Motherboard();
  }

  installProcessor() {
    this.computer.processor = new Processor();
  }

  installMemory() {
    this.computer.memory = new Memory();
  }

  installVideoCard() {
    this.computer.videoCard = new VideoCard();
  }

  installHardDrive() {
    this.computer.hardDrive = new HardDrive();
  }

  getComputer() {
    return this.computer;
  }
}

class Manager {
  constructor(builder) {
    this.builder = builder;
  }

  buildComputer() {
    this.builder.installMotherboard();
    this.builder.installProcessor();
    this.builder.installMemory();
    this.builder.installVideoCard();
    this.builder.installHardDrive();
  }

  getComputer() {
    this.builder.getComputer();
  }
}

let manager = new Manager(new ComputerBuilder());

manager.buildComputer();

let computer = manager.getComputer();

