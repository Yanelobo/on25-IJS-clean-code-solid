// The reading of the pressure value from the sensor is simulated in this implementation.
// Because the focus of the exercise is on the other class.

class Sensor {
    static Offset() {
        return 16;
    }

    static samplePressure() {
        // Simulação de implementação que simula um sensor real em um pneu real
        const pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
        return pressureTelemetryValue;
    }

    popNextPressurePsiValue() {
        const pressureTelemetryValue = Sensor.samplePressure();
        return Sensor.Offset() + pressureTelemetryValue;
    }
}


module.exports = Sensor;
