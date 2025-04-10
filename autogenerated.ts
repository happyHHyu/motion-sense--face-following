// Auto-generated. Do not edit.
namespace ml {
  export namespace event {
      //% fixedInstance block="no"
  export const No = new MlEvent(2, "no");
  //% fixedInstance block="tick"
  export const Tick = new MlEvent(3, "tick");
  //% fixedInstance block="nothing"
  export const Nothing = new MlEvent(4, "nothing");

    }
    
  events = [event.Unknown,event.No,event.Tick,event.Nothing];
    
  control.onEvent(MlRunnerIds.MlRunnerInference, 1, () => {
    if (!event.Unknown.onStartHandler) {
      maybeUpdateEventStats(event.Unknown);
    }
  });
  control.onEvent(MlRunnerIds.MlRunnerInference, 2, () => {
    if (!event.No.onStartHandler) {
      maybeUpdateEventStats(event.No);
    }
  });
  control.onEvent(MlRunnerIds.MlRunnerInference, 3, () => {
    if (!event.Tick.onStartHandler) {
      maybeUpdateEventStats(event.Tick);
    }
  });
  control.onEvent(MlRunnerIds.MlRunnerInference, 4, () => {
    if (!event.Nothing.onStartHandler) {
      maybeUpdateEventStats(event.Nothing);
    }
  });

  getModelBlob = (): Buffer => {
    const result = hex`4C444F4D38001400320003000000000000000003CDCC4C3F036E6F00CDCC4C3F057469636B000000CDCC4C3F086E6F7468696E6700000000620F47304D4C344650000000700D0000A40500000000000000000000A80000000800000001000000080000000100000000000000000000000000000000000000180000000000000003000000000000002DE9F05F0F460169091839600021796038680346B3EC1E1A07F2080292EC010A20EE010A30EE210AA2EC010A92EC010A20EE020A30EE220AA2EC010A92EC010A20EE030A30EE230AA2EC010A92EC010A20EE040A30EE240AA2EC010A92EC010A20EE050A30EE250AA2EC010A92EC010A20EE060A30EE260AA2EC010A92EC010A20EE070A30EE270AA2EC010A92EC010A20EE080A30EE280AA2EC010A92EC010A20EE090A30EE290AA2EC010A92EC010A20EE0A0A30EE2A0AA2EC010A92EC010A20EE0B0A30EE2B0AA2EC010A92EC010A20EE0C0A30EE2C0AA2EC010A92EC010A20EE0D0A30EE2D0AA2EC010A92EC010A20EE0E0A30EE2E0AA2EC010A92EC010A20EE0F0A30EE2F0AA2EC010A02F22402B3EC121A07F2440292EC010A20EE010A30EE210AA2EC010A92EC010A20EE020A30EE220AA2EC010A92EC010A20EE030A30EE230AA2EC010A92EC010A20EE040A30EE240AA2EC010A92EC010A20EE050A30EE250AA2EC010A92EC010A20EE060A30EE260AA2EC010A92EC010A20EE070A30EE270AA2EC010A92EC010A20EE080A30EE280AA2EC010A92EC010A20EE090A30EE290AA2EC010A02F23C02386800F2C00307F268021024B3EC010A07F20801F1EC0E0AF3EC0E7A60EEA70A21EE081A30EE200A61EEA81A30EE010A22EE092A30EE210A62EEA92A30EE020A23EE0A3A30EE220A63EEAA3A30EE030A24EE0B4A30EE230A64EEAB4A30EE040A25EE0C5A30EE240A65EEAC5A30EE050A26EE0D6A30EE250A66EEAD6A30EE060A27EE0E7A30EE260A30EE070AF1EC0A0AF3EC0A7A60EEA70A21EE081A30EE200A61EEA81A30EE010A22EE092A30EE210A62EEA92A30EE020A23EE0A3A30EE220A63EEAA3A30EE030A24EE0B4A30EE230A64EEAB4A30EE040A25EE0C5A30EE240A30EE050AA2EC010A013C8FD107F2680210680028B8BF40F2000001C210680028B8BF40F2000001C210680028B8BF40F2000001C210680028B8BF40F2000001C210680028B8BF40F2000001C210680028B8BF40F2000001C210680028B8BF40F2000001C210680028B8BF40F2000001C210680028B8BF40F2000001C210680028B8BF40F2000001C210680028B8BF40F2000001C210680028B8BF40F2000001C210680028B8BF40F2000001C210680028B8BF40F2000001C210680028B8BF40F2000001C210680028B8BF40F2000001C2386800F2007307F208020324B3EC010A07F26801F1EC0E0AF3EC0E7A60EEA70A21EE081A30EE200A61EEA81A30EE010A22EE092A30EE210A62EEA92A30EE020A23EE0A3A30EE220A63EEAA3A30EE030A24EE0B4A30EE230A64EEAB4A30EE040A25EE0C5A30EE240A65EEAC5A30EE050A26EE0D6A30EE250A66EEAD6A30EE060A27EE0E7A30EE260A30EE070AF1EC020AF3EC027A60EEA70A21EE081A30EE200A30EE010AA2EC010A013CAFD107F208021046032100F002F8BDE8F09F012938B5D0ED002A29D9031D00EB8102F3EC017AF4EE627AF1EE10FAC8BFF0EE672A9A42F4D1002402EE104A054695ED000A30EE620A00F015F80134A14232EE002AA5EC010AF2D8002390ED007AC7EE027A01339942E0EC017AF6D838BD0029E1D138BDDFED297AB4EEE70AF1EE10FA48D4DFED277AB4EEE70AF1EE10FA3ADCDFED247ADFED244A9FED243ADFED243A9FED245A9FED244ADFED245A9FED246ADFED246A60EE277AB7EE007A77EEA47A77EEE47AA7EE830AFDEEE74AA7EEA30AF0EE457AE4EE007A14EE903AE7EE805AA5EE806AE6EE006AF0EE667AF0EE476AE7EE806AA6EE807A17EE102A02EBC35300EE103A7047DFED107AB7EE007A87EE270A70479FED0C0A704700000000AAC20000AE423BAAB83F0000404B007231BF8EBEBFB56E2F093C00A0B43AADAD2A3D28AA2A3EFBFFFF3E00000000CA76DA3F54AA8BBFD44F8A3F2C9979BFEEC9154075F71ABFE203324022317CBF4447ED3FFC63BABE76E652407D97973E7241CE3F0D19E23EFD41BF3FDBA4343FAE27F43F11E93B3F27EC4F40498849BFB8E80940BB4079BF3C66814002985CBFBBF85C3F747D64BFF250363F7D4A80BF5ED07C3F39149CBFACF2793D98C0B7BF59D4A93DD4884FC084BEE13DBA62F0BF77B28B409B56F0BD062DC440947090BE41719840EA0E90BE1CE51A40F0809DBFF0F90A406FD7EEBFF43E7C4088DFC5BF40633ABDD8CE013D8C5AEA3C4265443E6F68A2BCC2BFC6BD195BF8BDD3F05BBD074A7DBE21A97BBE9C66213E511E0FBEF05B053E9997133DE0D03C3D916C333E2D255A3D349D643EC3000C3D80B7EEBD658BAF3DB779E0BD51CEFD3D86EF663E8C310D3D1F4D90BC742C8FBD8BAAB1BE9EB462BD31B699BDDC0784BC9EEB2CBE371C5BBE39319D3E1A753FBDDCD6273EBD2B7B3E9EDD5DBDCBC1ED3D007A393EF4859C3E0A70773CF1319A3D465F2C3E45E57F3DBBE29F3E456A81BE810837BC08B11ABDEE3176BEC6C928BD9CAD8F3D089894BE1BE02A3D03E254BE2E96A3BC24EF8EBD0DEA493E401C113DB7B9303E3EC9AEBD057E633D0FE4223E1F46253E8ACBCEBD1F62253E0A0ECE3D528D5F3D4CB580BD15A3613EB5600BBD9E7DFBBDA84C9C3D330F0D3E8F76CEBD6CE6663E5C8A81BEA515873EF10A98BE614BC1BE111A013EE88D32BE6696813ECFEAEE3E838DAEBE973D183D8D1CF93D00EEFBBDD995CDBD75E80A3E5A6E2FBDA45F0FBE2C0F693E6337D63DDE778EBEE0EC3BBDEEA585BED2CE45BD30130BBE8841F6BD4ECCDC3D1A797C3E63735BBE8A63223DA3049C3E7873D33DC257DC3E99D2CB3D351009BFB1E1C33EB6B34EBEF3A2933DD1BB653EC362933DAE5DE0BBAE87023D516B8E3D164087BDE05CF3BDFEF1E93EF8DE063DB4C36BBB8909573EB82F89BEAC91EF3D202DE63C91CBA23D9D70FD3DC61F9C3D8B8352BE68645B3E31FC82BE400C0BBEAD92823E7F808CBE174CBD3D160382BE322BC13DAC70233E4AEDCF3E97A5013FAD7928BE827BB2BEA82D17BE3D2A30BECDEF0FBF0CB49ABE6EFDF43DF268023D118C133EAC738D3DF57C79BD967FA03EF13D8E3D8FF485BECA59823E4FF427BF93868EBCBCA15A3E2D05B2BEEA51473E43E980BE45380A3D18C1BD3E58819FBED113C73EE1BE6A3D478A37BF060B8BBE766CD83D3601D2BE887D4C3CE0CC80BEE7CA16BEED2FCA3D7C2D00BE874E81BEAE12ABBD77BC4BBD1D2CAA3D0E49CEBD7032E73DC49EF43D5CC499BDF72B01BD81EE103E32C71EBEC8984D3E2CB87FBD1B41CC3E463C4C3DEB296C3EFC1D3C3ED6E612BCD18EC6BEE897773E35DEA4BB05AE793DA745E1BDF5158ABE9C315CBC55D2263D090DDBBDC72DD03D6D90D2BD02A7B73D54E9253ECFE48C3EEC5A7D3E9C4A1A3EB2288ABE56CB70BD37E6C43CD50D56BBE789393ECA4F883E9139183EE92E14BCA7CF35BD0163813E54DEB0BDDB48DEBD4A61C03D98198C3EEE9B973E198722BD8F3E2E3E31B791BE231FB13DE091763D2E5400BE4F012C3EB6A025BE31C34ABEB35EAB3B81A8E03C15C93A3D9BC49CBE8BB6373E31C9033EAFF07C3E7747C23D5D481CBE1562C1BE22F7F8BCF83B04BE97E88FBD8785B83CE0F66C3EA4916CBDAC3E983E221E893E5F5B13BEFB5ABFBE660E68BE6A6B99BE6C92A13EDDFEA93E0CD47E3D9E8A6C3E0F9FF0BDBD50DABE811224BFF5BCC8BED67CBABEE0CA1FBFEC33283D78BA7ABC90DC7D3E12367EBE8C534BBE462CB63D405AD63D49E37D3E074DD13EB816A9BB378C95BE1AC9AFBDDA0343BED7CF9F3EE7151B3EBD5947BED67A94BE5C5FB23DEF85D33D766D0E3FD167A53E751BC53E11B5EEBDF16FDDBE674897BE4BAE8C3E5958D8BE9E8F44BEAEB784BDAA34F6BD7698293ECC344ABE95C80C3EF6359A3DD9F51B3D8F5ECF3DA12051BE923695BEB616F2BDCEBDB3BC5227D0BEA999DD3EE953B93C22D13F3D4E20D43DFEFA95BD750F193E19351FBD50312E3E2CEDBEBCD873133EB444CA3D44D1F3BDB00F2E3D2E7CD7BE2B0F4ABE1CBAB53E1A02943C9FCB8F3EB1E3423E53DE153E6516C0BE176C383E0346A33E69796EBE70A0263E814C233ED086DEBE05B566BDB68E143ED123823E376B523EDEDACF3CBE92483E2BF9B5BD8CE2993C046BF83DFD8FA63E0A2C3C3E5EA5F43DA6D9AC3D944C38BEC2274ABA9A6BC1BEA2F1393E667C8DBD84703F3E4378013FD1A4D93DCB2CC7BEF0A46F3EAE4FA13E86C74CBF649D52BEAF4DF43CE553BB3EEF8127BE0578263E0C145D3EB6003F3E30B2263DCEDB753EB4DA03BE72D03A3ED691223FF6E183BEB642343B84A08FBDCF42C8BEC56E3ABDE453E23D91CFC23EB51C123E974D18BEAE0418BE2BA1FD3D9BB97BBEB1DE0ABE208075BE8E5BA63E711F77BCF82451BD0938963EF74C483D5911603EADE19BBC5F84F43D6AE6513EEA9CA3BDDB24593E88D6703A4C8BA33D6D9502BD1CFAA03D02A836BE1CA60EBD14D9B13EF915F73C3B293BBF37094C3EED3E29BF3DAA3DBFBFD6403E29DC0F3D4C35293ED51A91BE55E84DBEB91FBABE8F4CF53EE4BD9A3FE0B7583DC5E085BE9AC110BF2FBDE83EE80F533E3D7BE33D173829BF7729A73E47B9503FD580843EC5E6D93E1BA0343E4D461EBF6954343FE29BB43D3352EABE3890003D689AAEBEC234E13EAA0BC13CEFD9983ED01BC7BDCF85303EA081163E00C02EBF695833BF91CCB3BE265EBE3E15F104BFBE0B793F8C526DBE872F2C3EA9DF153EA0290BBFCB0000BF`;
    return result;
  };

  simulatorSendData();
}

// Auto-generated. Do not edit. Really.
