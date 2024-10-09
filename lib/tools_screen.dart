
import 'package:flutter/material.dart';
import 'package:flutter_tool/convert_json_to__model/convert_json_to_freezed_model.dart';
import 'package:flutter_tool/convert_json_to__model/convert_json_to_model.dart';
import 'package:flutter_tool/shared/my_button.dart';



class ToolsScreen extends StatelessWidget {
  const ToolsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: ListView(
        children:  [
          NavigateButton(text: "ConvertJsonToModelScreen", widget: ConvertJsonToModelScreen()),
          NavigateButton(text: "ConvertJsonToFreezedScreen", widget: ConvertJsonToFreezedScreen()),





        ],
      ),
    );
  }
}
