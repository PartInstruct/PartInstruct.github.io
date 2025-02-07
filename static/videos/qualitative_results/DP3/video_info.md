```js
{
    "video_file": "task_type-3_env-4.mp4",
        "tasks": "{'params': {'part_grasp': 'mouth'}, 'skill_name': 'grasp_obj'} {'params': {'dir_move': 'left', 'grasping': True, 'put_down': False, 'touching': False}, 'skill_name': 'move_gripper'}"
},
 {
                    "chain_params": [
                        {
                            "params": {
                                "part_grasp": "mouth"
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
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/bottle/3/episode1195",
                    "ep_id": "1195",
                    "obj_id": "3655",
                    "obj_pose": [
                        0.0,
                        0.0,
                        1.0,
                        6.123233995736766e-17,
                        0.008201515572378075,
                        -0.02096285756114253,
                        0.15
                    ],
                    "obj_scale": 0.1,
                    "part_names": [
                        "mouth",
                        "lid",
                        "body"
                    ],
                    "skill_instructions": [
                        "Grasp the bottle at its mouth",
                        "Move to the left"
                    ],
                    "task_instruction": "Grab the mouth of the bottle and move it to the left."
                },
```

```json
FAILED_task_type-12_env-1.mp4   
{
        "video_file": "task_type-12_env-1.mp4",
        "tasks": "{'params': {'part_grasp': 'top'}, 'skill_name': 'grasp_obj'} {'params': {'dir_move': 'top', 'grasping': True, 'put_down': False, 'touching': False}, 'skill_name': 'move_gripper'} {'params': {'dir_rotate': 'left', 'part_rotate': 'mouth'}, 'skill_name': 'rotate_obj'} {'params': {'dir_move': 'bottom', 'grasping': True, 'put_down': True, 'touching': False}, 'skill_name': 'move_gripper'}"
    },

                    "ep_id": "190000",
                    "obj_id": "3618",
                    "obj_pose": [
                        0.0,
                        0.0,
                        0.0,
                        1.0,
                        0.009412436024163369,
                        -0.01201536442939597,
                        0.15
                    ],
                    "obj_scale": 0.1,
                    "part_names": [
                        "mouth",
                        "lid",
                        "body"
                    ],
                    "skill_instructions": [
                        "Grasp the bottle at its top",
                        "Move upwards",
                        "Reorient the mouth of the bottle to face left",
                        "Move downwards"
                    ],
                    "task_instruction": "Hoist the bottle by its top, turn the mouth toward left, then put it down."
```

```json
FAILED_task_type-9.mp4  
{
        "video_file": "task_type-9_env-1.mp4",
        "tasks": "{'params': {'part_grasp': 'left'}, 'skill_name': 'grasp_obj'} {'params': {'dir_move': 'top', 'grasping': True, 'put_down': False, 'touching': False}, 'skill_name': 'move_gripper'} {'params': {'dir_move': 'left', 'grasping': True, 'put_down': False, 'touching': False}, 'skill_name': 'move_gripper'} {'params': {'dir_move': 'bottom', 'grasping': True, 'put_down': True, 'touching': False}, 'skill_name': 'move_gripper'}"
    }
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
                                "dir_move": "left",
                                "grasping": true,
                                "put_down": false,
                                "touching": false
                            },
                            "skill_name": "move_gripper"
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
                    "demo_path": "data/demos_augmented_test/mug/9/episode300089",
                    "ep_id": "300089",
                    "obj_id": "8613",
                    "obj_pose": [
                        0.0,
                        0.0,
                        0.7071067811865476,
                        -0.7071067811865475,
                        0.02418049423166314,
                        -0.0456574039263561,
                        0.15
                    ],
                    "obj_scale": 0.1,
                    "part_names": [
                        "handle",
                        "body"
                    ],
                    "skill_instructions": [
                        "Grasp the mug at its left",
                        "Move upwards",
                        "Move to the left",
                        "Move downwards"
                    ],
                    "task_instruction": "Raise the mug by its left, shift it to the left, then place it."
                }
```

```json
test2_3_env_3_screen.mp4
{
                    "chain_params": [
                        {
                            "params": {
                                "part_grasp": "screen"
                            },
                            "skill_name": "grasp_obj"
                        },
                        {
                            "params": {
                                "dir_move": "right",
                                "grasping": true,
                                "put_down": false,
                                "touching": false
                            },
                            "skill_name": "move_gripper"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/display/3/episode180506",
                    "ep_id": "180506",
                    "obj_id": "4853",
                    "obj_pose": [
                        0.0,
                        0.0,
                        1.0,
                        6.123233995736766e-17,
                        -0.0016007107892854582,
                        -0.05601735561894435,
                        0.15
                    ],
                    "obj_scale": 0.15,
                    "part_names": [
                        "base support",
                        "surface",
                        "frame",
                        "screen"
                    ],
                    "skill_instructions": [
                        "Grasp the display at its screen",
                        "Move to the right"
                    ],
                    "task_instruction": "Grab the screen of the display and move it to the right."
                }
```

```json
test3_2_env_2_scissors.mp4
{
                    "chain_params": [
                        {
                            "params": {
                                "part_touch": "top"
                            },
                            "skill_name": "touch_obj"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/scissors/2/episode30055",
                    "ep_id": "30055",
                    "obj_id": "10502",
                    "obj_pose": [
                        0.0,
                        0.0,
                        0.7071067811865475,
                        0.7071067811865476,
                        -0.011709434954230276,
                        -0.022877521687400253,
                        0.15
                    ],
                    "obj_scale": 0.15,
                    "part_names": [
                        "blade",
                        "handle",
                        "screw"
                    ],
                    "skill_instructions": [
                        "Touch the scissors at its top"
                    ],
                    "task_instruction": "Place gripper tip on the top of the scissors."
                },
```

```js
FAILED_test4_15_env_3_dispenser.mp4
{
                    "chain_params": [
                        {
                            "params": {
                                "part_touch": "left"
                            },
                            "skill_name": "touch_obj"
                        },
                        {
                            "params": {
                                "dir_move": "right",
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
                                "part_grasp": "top"
                            },
                            "skill_name": "grasp_obj"
                        },
                        {
                            "params": {
                                "dir_rotate": "left",
                                "part_rotate": "back"
                            },
                            "skill_name": "rotate_obj"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/dispenser/15/episode193001",
                    "ep_id": "193001",
                    "obj_id": "101541",
                    "obj_pose": [
                        0.0,
                        0.0,
                        0.7071067811865476,
                        -0.7071067811865475,
                        0.014075413013054837,
                        -0.023974811414898316,
                        0.15
                    ],
                    "obj_scale": 0.1,
                    "part_names": [
                        "base body",
                        "pressing lid"
                    ],
                    "skill_instructions": [
                        "Touch the dispenser at its left",
                        "Move to the right",
                        "Release",
                        "Grasp the dispenser at its top",
                        "Reorient the back of the dispenser to face left"
                    ],
                    "task_instruction": "Push the left of the dispenser to the right, then turn the top to face left."
                }
```

```js
test2_2_env_2_video.mp4
{
                    "chain_params": [
                        {
                            "params": {
                                "part_touch": "right"
                            },
                            "skill_name": "touch_obj"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/bottle/2/episode170013",
                    "ep_id": "170013",
                    "obj_id": "3616",
                    "obj_pose": [
                        0.0,
                        0.0,
                        1.0,
                        6.123233995736766e-17,
                        0.0014156519865406447,
                        -0.022136310693500638,
                        0.15
                    ],
                    "obj_scale": 0.1,
                    "part_names": [
                        "neck",
                        "lid",
                        "body"
                    ],
                    "skill_instructions": [
                        "Touch the bottle at its right"
                    ],
                    "task_instruction": "Place gripper tip on the right of the bottle."
                },
```

```js
FAILED_test2_10_env_1_knife.mp4
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
                                "dir_move": "front",
                                "grasping": true,
                                "put_down": false,
                                "touching": false
                            },
                            "skill_name": "move_gripper"
                        },
                        {
                            "params": {
                                "dir_rotate": "left",
                                "part_rotate": "bottom"
                            },
                            "skill_name": "rotate_obj"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/knife/10/episode171073",
                    "ep_id": "171073",
                    "obj_id": "101253",
                    "obj_pose": [
                        0.0,
                        0.0,
                        1.0,
                        6.123233995736766e-17,
                        -0.017543490582994672,
                        0.00048345122275735355,
                        0.15
                    ],
                    "obj_scale": 0.15,
                    "part_names": [
                        "base body",
                        "rotation blade"
                    ],
                    "skill_instructions": [
                        "Grasp the knife at its top",
                        "Move upwards",
                        "Move forwards",
                        "Reorient the bottom of the knife to face left"
                    ],
                    "task_instruction": "Hoist the knife by its top, shift it forwards, then rotate the bottom toward left."
                },
```

```js
FAILED_test2_1_env_0_bucket.mp4
{
                    "chain_params": [
                        {
                            "params": {
                                "part_grasp": "handle"
                            },
                            "skill_name": "grasp_obj"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/bucket/1/episode1006",
                    "ep_id": "1006",
                    "obj_id": "100466",
                    "obj_pose": [
                        0.0,
                        0.0,
                        1.0,
                        6.123233995736766e-17,
                        0.022883744085635857,
                        -0.01022482408726165,
                        0.15
                    ],
                    "obj_scale": 0.15,
                    "part_names": [
                        "handle",
                        "base body"
                    ],
                    "skill_instructions": [
                        "Grasp the bucket at its handle"
                    ],
                    "task_instruction": "Grab the handle of the bucket."
                },
```

```js
FAILED_test2_3_env_3_video.mp4
{
                    "chain_params": [
                        {
                            "params": {
                                "part_grasp": "handle"
                            },
                            "skill_name": "grasp_obj"
                        },
                        {
                            "params": {
                                "dir_move": "right",
                                "grasping": true,
                                "put_down": false,
                                "touching": false
                            },
                            "skill_name": "move_gripper"
                        }
                    ],
                    "demo_path": "data/demos_augmented_test/dispenser/3/episode170141",
                    "ep_id": "170141",
                    "obj_id": "101542",
                    "obj_pose": [
                        0.0,
                        0.0,
                        1.0,
                        6.123233995736766e-17,
                        -0.023218058102672877,
                        -0.06677020914002907,
                        0.15
                    ],
                    "obj_scale": 0.1,
                    "part_names": [
                        "handle",
                        "base body",
                        "head"
                    ],
                    "skill_instructions": [
                        "Grasp the dispenser at its handle",
                        "Move to the right"
                    ],
                    "task_instruction": "Hold the handle of the dispenser and slide it to the right."
                },
```

