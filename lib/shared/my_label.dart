import 'package:flutter/material.dart';

class MyLabel extends StatelessWidget {
  final String text;

  const MyLabel({
    Key? key,
    required this.text,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: <Widget>[
        Container(
            padding: const EdgeInsets.all(30),
            width: double.infinity,
            color: Colors.red,
            child: Text(
              text,
              style: const TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.w700,
                  color: Colors.white),
            )),
        const SizedBox(
          height: 20,
        ),
      ],
    );
  }
}