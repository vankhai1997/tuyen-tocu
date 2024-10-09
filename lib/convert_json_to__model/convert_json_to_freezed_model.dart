import 'dart:convert';


import 'package:code_text_field/code_text_field.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_highlight/flutter_highlight.dart';
import 'package:flutter_highlight/themes/atom-one-light.dart';
import 'package:flutter_highlight/themes/vs2015.dart';
import 'package:highlight/languages/yaml.dart';
import 'package:recase/recase.dart';



const errorString = "Can't parse JSON";
final Uri _url = Uri.parse('https://fb.com/tungakanuiii');


String output = "";

List<String> classNames = [];

const String template = """
@freezed
class {className} with _\${className} {
    const factory {className}({
       {field}
    }) = _{className};

    factory {className}.fromJson(Map<String, dynamic> json) => _\${className}FromJson(json);
}\n
""";

String getNameIfExist(String className) {
  String copyName = titleKey(className.camelCase.titleCase);
  if (classNames.contains(copyName)) {
    var x = 2;
    while (output.contains("$copyName$x")) {
      x++;
    }
    copyName = '$copyName$x';
  }
  return copyName;
}

void fromJsonToObject(Map<String, dynamic> json, String className) {
  String fields = "";

  for (var key in json.keys) {
    print(key);
    if (json[key] == null) {
      if (key.contains('_') || key.startsWith(r"$")) {
        fields += '@JsonKey(name: "$key") \n';
      }
      fields += 'final dynamic ${key.replaceAll("\$", "").camelCase},\n';
    } else if (json[key] is String) {
      if (key.contains('_') || key.startsWith(r"$")) {
        fields += '@JsonKey(name: "$key") \n';
      }
      fields += 'final String? ${key.replaceAll("\$", "").camelCase},\n';
    } else if (json[key] is int) {
      if (key.contains('_') || key.startsWith(r"$")) {
        fields += '@JsonKey(name: "$key") \n';
      }
      if (json[key].toString().contains('.')) {
        fields += 'final double? ${key.replaceAll("\$", "").camelCase},\n';
      } else {
        fields += 'final int? ${key.replaceAll("\$", "").camelCase},\n';
      }
    } else if (json[key] is double) {
      if (key.contains('_') || key.startsWith(r"$")) {
        fields += '@JsonKey(name: "$key") \n';
      }
      fields += 'final double? ${key.replaceAll("\$", "").camelCase},\n';
    } else if (json[key] is bool) {
      if (key.contains('_') || key.startsWith(r"$")) {
        fields += '@JsonKey(name: "$key") \n';
      }
      fields += 'final bool? ${key.replaceAll("\$", "").camelCase},\n';
    } else if (json[key] is Map) {
      final name = getNameIfExist(key);
      if (key.contains('_') || key.startsWith(r"$")) {
        fields +=
        '@JsonKey(name: "$key") $name? ${key.replaceAll("\$", "").camelCase},\n';
      } else {
        fields += '$name? ${key.replaceAll("\$", "").camelCase},\n';
      }
      classNames.add(name);
      fromJsonToObject(json[key], name);
    } else if (json[key] is List) {
      if ((json[key] as List).isEmpty) {
        if (key.contains('_') || key.startsWith(r"$")) {
          fields +=
          '@JsonKey(name: "$key") List<dynamic>? ${key.replaceAll("\$", "").camelCase},\n';
        } else {
          fields += 'final List<dynamic>? ${key.replaceAll("\$", "").camelCase},\n';
        }
      } else if (json[key].first is String) {
        if (key.contains('_') || key.startsWith(r"$")) {
          fields +=
          '@JsonKey(name: "$key") List<String>? ${key.replaceAll("\$", "").camelCase},\n';
        } else {
          fields += 'final List<String>? ${key.replaceAll("\$", "").camelCase},\n';
        }
      } else if (json[key].first is int) {
        if (key.contains('_') || key.startsWith(r"$")) {
          fields +=
          '@JsonKey(name: "$key") List<int>? ${key.replaceAll("\$", "").camelCase},\n';
        } else {
          fields += 'final List<int>? ${key.replaceAll("\$", "").camelCase},\n';
        }
      } else if (json[key].first is double) {
        if (key.contains('_') || key.startsWith(r"$")) {
          fields +=
          '@JsonKey(name: "$key") List<double>? ${key.replaceAll("\$", "").camelCase},\n';
        } else {
          fields += 'final List<double>? ${key.replaceAll("\$", "").camelCase},\n';
        }
      } else if (json[key].first is bool) {
        if (key.contains('_') || key.startsWith(r"$")) {
          fields +=
          '@JsonKey(name: "$key") List<bool>? ${key.replaceAll("\$", "").camelCase},\n';
        } else {
          fields += 'final List<bool>? ${key.replaceAll("\$", "").camelCase},\n';
        }
      } else if (json[key].first is List) {
        if (key.contains('_') || key.startsWith(r"$")) {
          fields +=
          '@JsonKey(name: "$key") List<List<dynamic>>? ${key.replaceAll("\$", "").camelCase},\n';
        } else {
          fields +=
          'final List<List<dynamic>>? ${key.replaceAll("\$", "").camelCase},\n';
        }
      } else if (json[key].first is Map) {
        final name = getNameIfExist(key.camelCase.titleCase);
        if (key.contains('_') || key.startsWith(r"$")) {
          fields +=
          '@JsonKey(name: "$key") List<$name>? ${key.replaceAll("\$", "").camelCase},\n';
        } else {
          fields += 'final List<$name>? ${key.replaceAll("\$", "").camelCase},\n';
        }
        classNames.add(name);
        final List data = json[key] as List<dynamic>;
        if (data.isNotEmpty) {
          fromJsonToObject(
            (json[key] as List<dynamic>).first as Map<String, dynamic>,
            name,
          );
        } else {
          fromJsonToObject(
            {},
            name,
          );
        }
      }

      // if (key.contains('_') || key.startsWith(r"$")) {
      //   fields +=
      //       '@JsonKey(name: "$key") final List<$name>? ${key.replaceAll("\$", "").camelCase},\n';
      // } else {
      //   fields +=
      //       'final List<$name>? ${key.replaceAll("\$", "").camelCase},\n';
      // }
      // classNames.add(titleKey(name));
      // final List data = json[key] as List<dynamic>;
      // if (data.isNotEmpty) {
      //   fromJsonToObject(
      //     (json[key] as List<dynamic>).first as Map<String, dynamic>,
      //     titleKey(name),
      //   );
      // } else {
      //   fromJsonToObject(
      //     {},
      //     titleKey(name),
      //   );
      // }
    }
  }

  output += template
      .replaceAll('{className}', className)
      .replaceAll('{field}', fields.replaceAll('"\$', '"\\\$'));
}

const Color greenColor = Color(0xFF06D6A0);

String titleKey(String val) => val.titleCase.split(" ").join();

class ConvertJsonToFreezedScreen extends StatefulWidget {
  const ConvertJsonToFreezedScreen({Key? key}) : super(key: key);

  @override
  State<ConvertJsonToFreezedScreen> createState() => _ConvertJsonToFreezedScreenState();
}

class _ConvertJsonToFreezedScreenState extends State<ConvertJsonToFreezedScreen> {
  String className = "";
  String input = "";

  late CodeController _codeController;

  late FocusNode _focusNode;

  @override
  void initState() {
    super.initState();
    _focusNode = FocusNode();
    _codeController = CodeController(
      text: "",
      language: yaml,
    );

    ///Todo Tuyen mock data
    classNames.clear();
    classNames.add(titleKey("UserModel"));
    className = titleKey("UserModel");

    input = """
    {
        "service": "crm",
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZhYTRhY2ZlY2E1MTI0YzgzNjY1NGY4In0sImtleSI6ImFjdC0zMDhlZjkxMy1hMDBiLTQzNmQtYWEyNC00YzJkYTc0ZjlhNDMiLCJpYXQiOjE2ODA4NTE1MjgsImV4cCI6MzM2MTgxMzQ1Nn0.uTbxldoByiSqhez8GtyuxUXUSWBmikWBb30ZKcqKizz",
        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZhYTRhY2ZlY2E1MTI0YzgzNjY1NGY4In0sImtleSI6InJ0ay0zMDhlZjkxMy1hMDBiLTQzNmQtYWEyNC00YzJkYTc0ZjlhNDMiLCJpYXQiOjE2ODA4NTE1MjgsImV4cCI6NDgwMjkxNTUyOH0.AIzxlHNM2I9CgpUtmeYjwOqNpYKUUMcTfuxIqEC5kQ8",
        "platform": "mobile"
    }
    """;
    _codeController.text = input;

    ///end mock data
  }

  void process() {
    if (input.isEmpty) return;
    classNames = [];
    output = "";
    output += "import 'package:freezed_annotation/freezed_annotation.dart';\n";
    output += "part '${className.snakeCase}.freezed.dart';\n";
    output += "part '${className.snakeCase}.g.dart';\n\n";
    final js = jsonDecode(input);
    fromJsonToObject(js, className);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButtonLocation: FloatingActionButtonLocation.endTop,
      floatingActionButton: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          CupertinoButton(
            onPressed: () {
              Clipboard.setData(ClipboardData(text: output));
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text(
                    "Copied!",
                    style: TextStyle(fontSize: 16),
                  ),
                  duration: Duration(seconds: 1),
                  backgroundColor: greenColor,
                ),
              );
            },
            child: PhysicalModel(
              elevation: 16,
              color: greenColor,
              shadowColor: greenColor.withOpacity(0.6),
              shape: BoxShape.circle,
              child: Container(
                decoration: const BoxDecoration(
                  color: greenColor,
                  shape: BoxShape.circle,
                ),
                padding: const EdgeInsets.all(16),
                child: const Icon(
                  Icons.copy,
                  color: Colors.white,
                ),
              ),
            ),
          ),
          CupertinoButton(
            onPressed: () {
              try {
                setState(() {
                  process();
                });
              } catch (e) {
                setState(() {
                  output = errorString;
                });
              }
            },
            child: PhysicalModel(
              elevation: 16,
              color: greenColor,
              shadowColor: greenColor.withOpacity(0.6),
              shape: BoxShape.circle,
              child: Container(
                decoration: const BoxDecoration(
                  color: greenColor,
                  shape: BoxShape.circle,
                ),
                padding: const EdgeInsets.all(16),
                child: const Icon(
                  Icons.gps_not_fixed_outlined,
                  color: Colors.white,
                ),
              ),
            ),
          )
        ],
      ),
      body: Column(
        children: [
          Expanded(
            child: Row(
              children: [
                Expanded(
                  child: Container(
                    color: const Color(0xFF26547C),
                    padding: const EdgeInsets.all(16),
                    child: Column(
                      children: [
                        TextField(
                          style: const TextStyle(color: Colors.white),
                          decoration: const InputDecoration(
                            hintText: "Class name",
                            focusedBorder: OutlineInputBorder(
                              borderSide:
                              BorderSide(color: greenColor, width: 1.0),
                            ),
                            enabledBorder: OutlineInputBorder(
                              borderSide: BorderSide(
                                  color: Color(0xFFFFD166), width: 1.0),
                            ),
                            hintStyle: TextStyle(color: Colors.white),
                          ),
                          onChanged: (v) {
                            setState(() {
                              classNames.clear();
                              classNames.add(titleKey(v));
                              className = titleKey(v);
                            });
                          },
                        ),
                        const SizedBox(height: 12),
                        Expanded(
                          child: CodeTheme(
                            data: const CodeThemeData(styles: vs2015Theme),
                            child: CodeField(
                              controller: _codeController,
                              onChanged: (v) {
                                input = v;
                              },
                              expands: true,
                              maxLines: null,
                              minLines: null,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                Expanded(
                  child: output == errorString
                      ? const Center(
                    child: Text(
                      errorString,
                      style: TextStyle(color: Color(0xFFEF476F)),
                    ),
                  )
                      : SingleChildScrollView(
                    child: Padding(
                      padding:
                      const EdgeInsets.symmetric(horizontal: 16.0),
                      child: HighlightView(
                        output,
                        language: 'dart',
                        theme: atomOneLightTheme,
                        padding: const EdgeInsets.all(12),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}