```json
Box
{
                    "chain_params": [
                        {
                            "params": {
                                "part_grasp": "rotation lid"
                            },
                            "skill_name": "grasp_obj"
                        },
                        {
                            "params": {
                                "dir_move": "top",
                                "grasping": true,
                                "put_down": false,
                                "touching": false
                            },
                            "skill_name": "move_gripper"
                        },
                        {
                            "params": {
                                "dir_move": "right",
                                "grasping": true,
                                "put_down": false,
                                "touching": false
                            },
                            "skill_name": "move_gripper"
                        },
                        {
                            "params": {
                                "dir_rotate": "front",
                                "part_rotate": "bottom"
                            },
                            "skill_name": "rotate_obj"
                        },
                        {
                            "params": {
                                "dir_move": "bottom",
                                "grasping": true,
                                "put_down": true,
                                "touching": false
                            },
                            "skill_name": "move_gripper"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/box/13/episode1468",
                    "ep_id": "1468",
                    "obj_id": "100426",
                    "obj_pose": [
                        0.0,
                        0.0,
                        1.0,
                        6.123233995736766e-17,
                        -0.011324887228090786,
                        -0.018264598362030954,
                        0.15
                    ],
                    "obj_scale": 0.1,
                    "part_names": [
                        "rotation lid",
                        "base body"
                    ],
                    "skill_instructions": [
                        "Grasp the box at its rotation lid",
                        "Move upwards",
                        "Move to the right",
                        "Reorient the bottom of the box to face front",
                        "Move downwards"
                    ],
                    "task_instruction": "Lift the box by its rotation lid, move it to the right, turn the bottom to face front, then set it down."
                }
```

```json
bottle
{
                    "chain_params": [
                        {
                            "params": {
                                "part_grasp": "lid"
                            },
                            "skill_name": "grasp_obj"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/bottle/1/episode300116",
                    "ep_id": "300116",
                    "obj_id": "3763",
                    "obj_pose": [
                        0.0,
                        0.0,
                        0.0,
                        1.0,
                        -0.05142130862063288,
                        -0.07313229708836658,
                        0.15
                    ],
                    "obj_scale": 0.1,
                    "part_names": [
                        "neck",
                        "lid",
                        "body"
                    ],
                    "skill_instructions": [
                        "Grasp the bottle at its lid"
                    ],
                    "task_instruction": "Take hold of the lid of the bottle."
                },
```

```json
FAILED_test1_1_video.mp4
{
                    "chain_params": [
                        {
                            "params": {
                                "part_grasp": "back"
                            },
                            "skill_name": "grasp_obj"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/dispenser/1/episode300182",
                    "ep_id": "300182",
                    "obj_id": "103412",
                    "obj_pose": [
                        0.0,
                        0.0,
                        0.7071067811865476,
                        -0.7071067811865475,
                        -0.12229058799343605,
                        -0.0457996452382829,
                        0.15
                    ],
                    "obj_scale": 0.1,
                    "part_names": [
                        "base body",
                        "pressing lid"
                    ],
                    "skill_instructions": [
                        "Grasp the dispenser at its back"
                    ],
                    "task_instruction": "Take hold of the back of the dispenser."
                },
```

```js
kettle

{
                    "chain_params": [
                        {
                            "params": {
                                "part_grasp": "handle"
                            },
                            "skill_name": "grasp_obj"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/kettle/1/episode100028",
                    "ep_id": "100472",
                    "obj_id": "102786",
                    "obj_pose": [
                        0.0,
                        0.0,
                        1.0,
                        6.123233995736766e-17,
                        0.015411359148470749,
                        -0.011047427449480014,
                        0.15
                    ],
                    "obj_scale": 0.1,
                    "part_names": [
                        "handle",
                        "base body",
                        "lid"
                    ],
                    "skill_instructions": [
                        "Grasp the kettle at its handle"
                    ],
                    "task_instruction": "Grab the handle of the kettle."
                },
```

```js
test4_13_env_0_kitchenpot.mp4
{
                    "chain_params": [
                        {
                            "params": {
                                "part_grasp": "top"
                            },
                            "skill_name": "grasp_obj"
                        },
                        {
                            "params": {
                                "dir_move": "top",
                                "grasping": true,
                                "put_down": false,
                                "touching": false
                            },
                            "skill_name": "move_gripper"
                        },
                        {
                            "params": {
                                "dir_move": "back",
                                "grasping": true,
                                "put_down": false,
                                "touching": false
                            },
                            "skill_name": "move_gripper"
                        },
                        {
                            "params": {
                                "dir_rotate": "left",
                                "part_rotate": "top"
                            },
                            "skill_name": "rotate_obj"
                        },
                        {
                            "params": {
                                "dir_move": "bottom",
                                "grasping": true,
                                "put_down": true,
                                "touching": false
                            },
                            "skill_name": "move_gripper"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/kitchenpot/13/episode10163",
                    "ep_id": "10163",
                    "obj_id": "100051",
                    "obj_pose": [
                        0.0,
                        0.0,
                        0.7071067811865475,
                        0.7071067811865476,
                        0.02437774203417644,
                        -0.01241555042652466,
                        0.15
                    ],
                    "obj_scale": 0.12,
                    "part_names": [
                        "base body",
                        "lid"
                    ],
                    "skill_instructions": [
                        "Grasp the kitchenpot at its top",
                        "Move upwards",
                        "Move backwards",
                        "Reorient the top of the kitchenpot to face left",
                        "Move downwards"
                    ],
                    "task_instruction": "Raise the kitchenpot by its top, shift it backwards, rotate the top to point left, then lay it down."
                },
```

```js
test2_1_bucket.mp4
{
                    "chain_params": [
                        {
                            "params": {
                                "part_grasp": "right"
                            },
                            "skill_name": "grasp_obj"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/bucket/1/episode170081",
                    "ep_id": "170081",
                    "obj_id": "100472",
                    "obj_pose": [
                        0.0,
                        0.0,
                        0.7071067811865475,
                        0.7071067811865476,
                        -0.0013446951634989816,
                        -0.050204495155878104,
                        0.15
                    ],
                    "obj_scale": 0.15,
                    "part_names": [
                        "handle",
                        "base body"
                    ],
                    "skill_instructions": [
                        "Grasp the bucket at its right"
                    ],
                    "task_instruction": "Grab the right of the bucket."
                }
```

```js
FAILED_test4_15_video.mp4
{
                    "chain_params": [
                        {
                            "params": {
                                "part_touch": "handle"
                            },
                            "skill_name": "touch_obj"
                        },
                        {
                            "params": {
                                "dir_move": "left",
                                "grasping": false,
                                "put_down": false,
                                "touching": true
                            },
                            "skill_name": "move_gripper"
                        },
                        {
                            "params": {},
                            "skill_name": "release_obj"
                        },
                        {
                            "params": {
                                "part_grasp": "right"
                            },
                            "skill_name": "grasp_obj"
                        },
                        {
                            "params": {
                                "dir_rotate": "left",
                                "part_rotate": "front"
                            },
                            "skill_name": "rotate_obj"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/mug/15/episode198011",
                    "ep_id": "198011",
                    "obj_id": "8617",
                    "obj_pose": [
                        0.0,
                        0.0,
                        0.0,
                        1.0,
                        0.003421365553214796,
                        -0.05234171337928741,
                        0.15
                    ],
                    "obj_scale": 0.1,
                    "part_names": [
                        "handle",
                        "body"
                    ],
                    "skill_instructions": [
                        "Touch the mug at its handle",
                        "Move to the left",
                        "Release",
                        "Grasp the mug at its right",
                        "Reorient the front of the mug to face left"
                    ],
                    "task_instruction": "Push the handle of the mug to the left, then rotate the right toward left."
                },
```

