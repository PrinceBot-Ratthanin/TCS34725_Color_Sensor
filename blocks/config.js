module.exports = [
	{
		name : "TCS34725_Color_Sensor",
		blocks : [
			"TCS34725_Color_Sensor_init",
            "TCS34725_Color_Sensor_getRGB",
            //"TCS34725_Color_Sensor_Read",
            {
                    xml : 
                    `<block type="TCS34725_Color_Sensor_Read">
                        <value name="_Color">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                },   	
		]
	}	
];