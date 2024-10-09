import 'package:flutter/material.dart';

class MyButton extends StatelessWidget {
  final String text;
  final VoidCallback callBack;

  const MyButton({
    Key? key,
    required this.text,
    required this.callBack,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: <Widget>[
        InkWell(
          onTap: () {
            callBack();
          },
          child: Container(
              padding: const EdgeInsets.all(30),
              width: double.infinity,
              color: Colors.blue,
              child: Text(
                text,
                style: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w700,
                    color: Colors.white),
              )),
        ),
        const SizedBox(
          height: 20,
        ),
      ],
    );
  }
}

class NavigateButton extends StatelessWidget {
  final String text;
  final Widget widget;
  final Color? color;
  final VoidCallback? onTap;

  const NavigateButton({
    Key? key,
    required this.text,
    required this.widget,
    this.color,
    this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        InkWell(
          onTap:onTap?? () {
            Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (_) => widget,
                ));
          },
          child: Container(
              padding: const EdgeInsets.all(30),
              width: double.infinity,
              color:color??Colors.blue,
              child: Text(
                text,
                style: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w700,
                    color: Colors.white),
              )),
        ),
        const SizedBox(
          height: 20,
        ),
      ],
    );
  }
}

class SmallButton extends StatelessWidget {
  final String text;
  final VoidCallback callBack;

  const SmallButton({
    Key? key,
    required this.text,
    required this.callBack,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        InkWell(
          onTap: () {
            callBack();
          },
          child: Container(
              padding: const EdgeInsets.all(30),
              color: Colors.blue,
              child: Text(
                text,
                style: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w700,
                    color: Colors.white),
              )),
        ),
        const SizedBox(
          height: 20,
        ),
      ],
    );
  }
}
