function blocklyLoaded(Blockly){
  var code = ""
  Blockly.addChangeListener(function(){
    code = Blockly.JavaScript.workspaceToCode();
    document.querySelector('.blockly-code').innerHTML = hljs.highlight('javascript', code).value;
  });

  Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, Blockly.Xml.textToDom('<xml> <block type="variables_set" inline="false" x="0" y="0"> <field name="VAR">year</field> <value name="VALUE"> <block type="math_number"> <field name="NUM">2012</field> </block> </value> <next> <block type="controls_if" inline="false"> <value name="IF0"> <block type="logic_compare" inline="true"> <field name="OP">EQ</field> <value name="A"> <block type="math_number"> <field name="NUM">0</field> </block> </value> <value name="B"> <block type="math_modulo" inline="true"> <value name="DIVIDEND"> <block type="variables_get"> <field name="VAR">year</field> </block> </value> <value name="DIVISOR"> <block type="math_number"> <field name="NUM">4</field> </block> </value> </block> </value> </block> </value> <statement name="DO0"> <block type="text_print" inline="false"> <value name="TEXT"> <block type="text"> <field name="TEXT">閏年</field> </block> </value> </block> </statement> </block> </next> </block> </xml>'));

  document.querySelector('.blockly-execute').addEventListener('click', function(){
    eval("(function(){" + code + "}())");
  });
}
