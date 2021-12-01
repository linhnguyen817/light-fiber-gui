module.exports = (sequelize, Sequelize) => {
    const LED_Design = sequelize.define("led_design", {
      ledColors: {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
            return this.getDataValue('ledColors').split(';')
        },
        set(val) {
            this.setDataValue('ledColors',val.join(';'));
        },
        }
    });
  
    return LED_Design;
  };    