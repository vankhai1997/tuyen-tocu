import 'package:flutter/material.dart';

class BaseScreen extends StatelessWidget {
  final List<Widget> widgets;
  const BaseScreen({Key? key, required this.widgets}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Column(
        children: widgets,
      ),
    );
  }
}
