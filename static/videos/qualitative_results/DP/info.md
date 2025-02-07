```json
FAILED_test5_type-8.mp4
"4": [
                {
                    "chain_params": [
                        {
                            "params": {
                                "part_touch": "right"
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
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/box/4/episode300030",
                    "ep_id": "300030",
                    "obj_id": "100154",
                    "obj_pose": [
                        0.0,
                        0.0,
                        1.0,
                        6.123233995736766e-17,
                        0.021324186877835213,
                        -0.03771248144490409,
                        0.15
                    ],
                    "obj_scale": 0.1,
                    "part_names": [
                        "rotation lid",
                        "base body"
                    ],
                    "skill_instructions": [
                        "Touch the box at its right",
                        "Move to the left"
                    ],
                    "task_instruction": "Push the right of the box in to the left."
                },
```

```json
test1_type-4_box.mp4
{
                    "chain_params": [
                        {
                            "params": {
                                "part_grasp": "left"
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
                                "dir_rotate": "top",
                                "part_rotate": "left"
                            },
                            "skill_name": "rotate_obj"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/laptop/8/episode100251",
                    "ep_id": "100953",
                    "obj_id": "10098",
                    "obj_pose": [
                        0.0,
                        0.0,
                        0.7071067811865475,
                        0.7071067811865476,
                        -0.01869769144067157,
                        -0.022532381513777247,
                        0.15
                    ],
                    "obj_scale": 0.15,
                    "part_names": [
                        "base frame",
                        "screen",
                        "touchpad",
                        "keyboard",
                        "screen frame"
                    ],
                    "skill_instructions": [
                        "Grasp the laptop at its left",
                        "Move upwards",
                        "Reorient the left of the laptop to face upwards"
                    ],
                    "task_instruction": "Pick up the laptop by its left, then turn the left to face upwards."
                },
```

```json
test3_5_env_5_mug.mp4
{
                    "chain_params": [
                        {
                            "params": {
                                "part_grasp": "right"
                            },
                            "skill_name": "grasp_obj"
                        },
                        {
                            "params": {
                                "dir_move": "left",
                                "grasping": true,
                                "put_down": false,
                                "touching": false
                            },
                            "skill_name": "move_gripper"
                        },
                        {
                            "params": {},
                            "skill_name": "release_obj"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/mug/5/episode180005",
                    "ep_id": "180005",
                    "obj_id": "8560",
                    "obj_pose": [
                        0.0,
                        0.0,
                        0.7071067811865475,
                        0.7071067811865476,
                        -0.013506478842144693,
                        -0.023870148262376066,
                        0.15
                    ],
                    "obj_scale": 0.1,
                    "part_names": [
                        "handle",
                        "containing things",
                        "body"
                    ],
                    "skill_instructions": [
                        "Grasp the mug at its right",
                        "Move to the left",
                        "Release"
                    ],
                    "task_instruction": "Take hold of the right of the mug, slide it to the left, then let go of it."
                },
```

```js
test3_5_env_5_mug_2.mp4
{
                    "chain_params": [
                        {
                            "params": {
                                "part_grasp": "left"
                            },
                            "skill_name": "grasp_obj"
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
                            "params": {},
                            "skill_name": "release_obj"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/mug/5/episode741",
                    "ep_id": "741",
                    "obj_id": "8595",
                    "obj_pose": [
                        0.0,
                        0.0,
                        0.0,
                        1.0,
                        0.0007137484978235256,
                        -0.045016130955690556,
                        0.15
                    ],
                    "obj_scale": 0.1,
                    "part_names": [
                        "handle",
                        "body"
                    ],
                    "skill_instructions": [
                        "Grasp the mug at its left",
                        "Move backwards",
                        "Release"
                    ],
                    "task_instruction": "Take hold of the left of the mug, slide it backwards, then let go of it."
                },
```

```js
test3_2_env_1_video.mp4
{
                    "chain_params": [
                        {
                            "params": {
                                "part_touch": "lid"
                            },
                            "skill_name": "touch_obj"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/kitchenpot/2/episode10141",
                    "ep_id": "10141",
                    "obj_id": "100058",
                    "obj_pose": [
                        0.0,
                        0.0,
                        0.7071067811865475,
                        0.7071067811865476,
                        -0.017788111287977755,
                        -0.044333863606375694,
                        0.15
                    ],
                    "obj_scale": 0.12,
                    "part_names": [
                        "base body",
                        "lid"
                    ],
                    "skill_instructions": [
                        "Touch the kitchenpot at its lid"
                    ],
                    "task_instruction": "Place gripper tip on the lid of the kitchenpot."
                },
```

```js
FAILED_test2_8_env_7_video.mp4
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
                                "dir_rotate": "bottom",
                                "part_rotate": "bottom"
                            },
                            "skill_name": "rotate_obj"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/bottle/8/episode180029",
                    "ep_id": "180029",
                    "obj_id": "4043",
                    "obj_pose": [
                        0.0,
                        0.0,
                        0.0,
                        1.0,
                        0.011337037823543103,
                        -0.04486660086690987,
                        0.15
                    ],
                    "obj_scale": 0.1,
                    "part_names": [
                        "neck",
                        "lid",
                        "body"
                    ],
                    "skill_instructions": [
                        "Grasp the bottle at its top",
                        "Move upwards",
                        "Reorient the bottom of the bottle to face downwards"
                    ],
                    "task_instruction": "Raise the bottle by its top and rotate the bottom to point downwards."
                },
```

```js
FAILED_test2_8_env_8_video.mp4
                {
                    "chain_params": [
                        {
                            "params": {
                                "part_grasp": "left"
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
                                "dir_rotate": "right",
                                "part_rotate": "top"
                            },
                            "skill_name": "rotate_obj"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/bucket/8/episode170117",
                    "ep_id": "170117",
                    "obj_id": "100464",
                    "obj_pose": [
                        0.0,
                        0.0,
                        1.0,
                        6.123233995736766e-17,
                        -0.005579524261007621,
                        -0.049023127543271254,
                        0.15
                    ],
                    "obj_scale": 0.15,
                    "part_names": [
                        "handle",
                        "base body"
                    ],
                    "skill_instructions": [
                        "Grasp the bucket at its left",
                        "Move upwards",
                        "Reorient the top of the bucket to face right"
                    ],
                    "task_instruction": "Pick up the bucket by its left, then turn the top to face right."
                },
```

