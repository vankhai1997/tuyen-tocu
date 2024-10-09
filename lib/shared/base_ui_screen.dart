import 'package:flutter/material.dart';

class BaseUIScreen extends StatelessWidget {
  final Widget widget;
  const BaseUIScreen({Key? key, required this.widget}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: widget,
    );
  }
}
