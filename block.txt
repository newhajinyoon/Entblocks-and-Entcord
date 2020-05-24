const LibraryCreator = {
    start: (blocksJSON, category, text) => {
        let blockArray = new Array
        // LibraryCreator 가져오기
        Entry.staticBlocks = [
            {
                category: 'start',
                blocks: [
                    'when_run_button_click',
                    'when_some_key_pressed',
                    'mouse_clicked',
                    'mouse_click_cancled',
                    'when_object_click',
                    'when_object_click_canceled',
                    'when_message_cast',
                    'message_cast',
                    'message_cast_wait',
                    'when_scene_start',
                    'start_scene',
                    'start_neighbor_scene',
                    'check_object_property',
                    'check_block_execution',
                    'switch_scope',
                    'is_answer_submited',
                    'check_lecture_goal',
                    'check_variable_by_name',
                    'show_prompt',
                    'check_goal_success',
                    'positive_number',
                    'negative_number',
                    'wildcard_string',
                    'wildcard_boolean',
                    'register_score',
                ],
            },
            {
                category: 'flow',
                blocks: [
                    'wait_second',
                    'repeat_basic',
                    'repeat_inf',
                    'repeat_while_true',
                    'stop_repeat',
                    '_if',
                    'if_else',
                    'wait_until_true',
                    'stop_object',
                    'restart_project',
                    'when_clone_start',
                    'create_clone',
                    'delete_clone',
                    'remove_all_clones',
                ],
            },
            {
                category: 'moving',
                blocks: [
                    'move_direction',
                    'bounce_wall',
                    'move_x',
                    'move_y',
                    'move_xy_time',
                    'locate_x',
                    'locate_y',
                    'locate_xy',
                    'locate_xy_time',
                    'locate',
                    'locate_object_time',
                    'rotate_relative',
                    'direction_relative',
                    'rotate_by_time',
                    'direction_relative_duration',
                    'rotate_absolute',
                    'direction_absolute',
                    'see_angle_object',
                    'move_to_angle',
                ],
            },
            {
                category: 'looks',
                blocks: [
                    'show',
                    'hide',
                    'dialog_time',
                    'dialog',
                    'remove_dialog',
                    'change_to_some_shape',
                    'change_to_next_shape',
                    'add_effect_amount',
                    'change_effect_amount',
                    'erase_all_effects',
                    'change_scale_size',
                    'set_scale_size',
                    'flip_x',
                    'flip_y',
                    'change_object_index',
                ],
            },
            {
                category: 'brush',
                blocks: [
                    'brush_stamp',
                    'start_drawing',
                    'stop_drawing',
                    'set_color',
                    'set_random_color',
                    'change_thickness',
                    'set_thickness',
                    'change_brush_transparency',
                    'set_brush_tranparency',
                    'brush_erase_all',
                ],
            },
            {
                category: 'text',
                blocks: ['text_read', 'text_write', 'text_append', 'text_prepend', 'text_flush'],
            },
            {
                category: 'sound',
                blocks: [
                    'sound_something_with_block',
                    'sound_something_second_with_block',
                    'sound_from_to',
                    'sound_something_wait_with_block',
                    'sound_something_second_wait_with_block',
                    'sound_from_to_and_wait',
                    'sound_volume_change',
                    'sound_volume_set',
                    'sound_silent_all',
                ],
            },
            {
                category: 'judgement',
                blocks: [
                    'is_clicked',
                    'is_press_some_key',
                    'reach_something',
                    'boolean_basic_operator',
                    'boolean_and_or',
                    'boolean_not',
                ],
            },
            {
                category: 'calc',
                blocks: [
                    'calc_basic',
                    'calc_rand',
                    'coordinate_mouse',
                    'coordinate_object',
                    'get_sound_volume',
                    'quotient_and_mod',
                    'calc_operation',
                    'get_project_timer_value',
                    'choose_project_timer_action',
                    'set_visible_project_timer',
                    'get_date',
                    'distance_something',
                    'get_sound_duration',
                    'get_user_name',
                    'length_of_string',
                    'combine_something',
                    'char_at',
                    'substring',
                    'index_of_string',
                    'replace_string',
                    'change_string_case',
                ],
            },
            {
                category: 'variable',
                blocks: [
                    'variableAddButton',
                    'listAddButton',
                    'ask_and_wait',
                    'get_canvas_input_value',
                    'set_visible_answer',
                    'get_variable',
                    'change_variable',
                    'set_variable',
                    'show_variable',
                    'hide_variable',
                    'value_of_index_from_list',
                    'add_value_to_list',
                    'remove_value_from_list',
                    'insert_value_to_list',
                    'change_value_list_index',
                    'length_of_list',
                    'is_included_in_list',
                    'show_list',
                    'hide_list',
                ],
            },
            {
                category: 'func',
                blocks: ['functionAddButton'],
            },
            {
                category: 'analysis',
                blocks: [
                    'analizyDataAddButton',
                    'append_row_to_table',
                    'insert_row_to_table',
                    'delete_row_from_table',
                    'set_value_from_table',
                    'get_table_count',
                    'get_value_from_table',
                    'calc_values_from_table',
                    'open_table_chart',
                    'close_table_chart',
                ],
            },
            {
                category: 'ai_utilize',
                blocks: [
                    'aiUtilizeBlockAddButton',
                    'aiUtilizeModelTrainButton',
                    'audio_title',
                    'check_microphone',
                    'speech_to_text_convert',
                    'speech_to_text_get_value',
                    'get_microphone_volume',
                    'tts_title',
                    'read_text',
                    'read_text_wait_with_block',
                    'set_tts_property',
                    'translate_title',
                    'get_translated_string',
                    'check_language',
                    'video_title',
                    'video_draw_webcam',
                    'video_check_webcam',
                    'video_flip_camera',
                    'video_set_camera_opacity_option',
                    'video_motion_value',
                    'video_toggle_model',
                    'video_is_model_loaded',
                    'video_number_detect',
                    'video_toggle_ind',
                    'video_body_part_coord',
                    'video_face_part_coord',
                    'video_detected_face_info',
                ],
            },
            {
                category: 'expansion',
                blocks: [
                    'expansionBlockAddButton',
                    'weather_title',
                    'check_weather',
                    'check_finedust',
                    'get_weather_data',
                    'get_current_weather_data',
                    'get_today_temperature',
                    'check_city_weather',
                    'check_city_finedust',
                    'get_city_weather_data',
                    'get_current_city_weather_data',
                    'get_today_city_temperature',
                    'festival_title',
                    'count_festival',
                    'get_festival_info',
                    'behaviorConductDisaster_title',
                    'count_disaster_behavior',
                    'get_disaster_behavior',
                    'behaviorConductLifeSafety_title',
                    'count_lifeSafety_behavior',
                    'get_lifeSafety_behavior',
                ],
            },
            {
                category: 'arduino',
                blocks: [
                    'arduino_reconnect',
                    'arduino_open',
                    'arduino_cloud_pc_open',
                    'arduino_connect',
                    'arduino_download_connector',
                    'download_guide',
                    'arduino_download_source',
                    'arduino_noti',
                ].concat(EntryStatic.DynamicHardwareBlocks),
            }
        ];
        EntryStatic.getAllBlocks = () => {
            return Entry.staticBlocks;
        }
        function updateCategory(category, options) {
            Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
                { category: 'start', visible: true },
                { category: 'flow', visible: true },
                { category: 'moving', visible: true },
                { category: 'looks', visible: true },
                { category: 'brush', visible: true },
                { category: 'text', visible: true },
                { category: 'sound', visible: true },
                { category: 'judgement', visible: true },
                { category: 'calc', visible: true },
                { category: 'variable', visible: true },
                { category: 'func', visible: true },
                { category: 'analysis', visible: true },
                { category: 'ai_utilize', visible: true },
                { category: 'expansion', visible: true },
                { category: category, visible: true },
                { category: 'arduino', visible: true }
            ]);
            for (let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
                if (!($($('.entryCategoryElementWorkspace')[i]).attr('id') == "entryCategorytext")) {
                    $($('.entryCategoryElementWorkspace')[i]).attr('class', 'entryCategoryElementWorkspace');
                }
            }
            Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
            Entry.playground.blockMenu._generateCategoryCode(category);
            if (options) {
                if (options.background) {
                    $(`#entryCategory${category}`).css('background-image', 'url(' + options.background + ')');
                    $(`#entryCategory${category}`).css('background-repeat', 'no-repeat');
                    if (options.backgroundSize) {
                        $(`#entryCategory${category}`).css('background-size', options.backgroundSize + "px");
                    }
                }
                if (options.name) {
                    $(`#entryCategory${category}`)[0].innerText = options.name
                }
            }
        }
        function addBlock(blockname, template, color, params, _class, func, skeleton = 'basic') {
            Entry.block[blockname] = {
                color: color.color,
                fontColor: color.font,
                outerLine: color.outline,
                skeleton: skeleton,
                statement: [],
                params: params.params,
                events: {},
                def: {
                    params: params.define,
                    type: blockname
                },
                paramsKeyMap: params.map,
                class: _class ? _class : 'default',
                func: func,
                template: template
            }
        }
        // 블록 추가하기
        for (let i in blocksJSON) {
            let block = blocksJSON[i]
            blockArray.push(block.name)
            addBlock(block.name, block.template, { color: block.color.default, outerLine: block.color.darken }, { params: block.params, define: block.def, map: block.map }, block.class, block.func, block.skeleton)
        }
        // 블록 반영
        Entry.staticBlocks.push({ category: category, blocks: blockArray })
        // 카테고리 업데이트 (ws에서만)
        if (typeof useWebGL == "undefined") {
            updateCategory(category)
            // 아이콘 적용
            $('head').append(`<style>#entryCategory${category}{background-image:url(/lib/entry-js/images/hardware.svg);background-repeat:no-repeat;margin-bottom:1px}.entrySelectedCategory#entryCategory${category}{background-image:url(/lib/entry-js/images/hardware_on.svg);background-color:#00b6b1;border-color:#00b6b1;color:#fff}</style>`)
            // 카테고리 이름 적용
            $(`#entryCategory${category}`).append(text)
        }
        console.log('%cEntBlocks 2.0 Made by thoratica.', 'background-color: #007bff; color: #e9ecef; padding: .7rem; font-family: sans-serif; font-size: .9rem; border-radius: 99999rem;')
        console.log('%cEntBlocks 2.0 follows the GNU General Public License version 3.0\nEntBlocks 2.0은 GNU General Public License version 3.0를 따릅니다.', 'font-family: sans-serif; font-size: .7rem')
    }
}
let blockPOST
const blocks = [
    {
        name: 'fetchBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: 'fetch',
                color: EntryStatic.colorSet.common.TEXT,
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'get',
        template: '%1 가져오기 (GET)',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            }
        ],
        def: [
            {
                type: 'text',
                params: ['https://playentry.org/api/discuss/findNotice']
            }
        ],
        map: {
            APIURL: 0
        },
        class: 'text',
        func: async (sprite, script) => {
            let res = await fetch(script.getValue('APIURL', script))
            let data = await res.json()
            return data
        },
    },
    {
        name: 'post',
        template: '%1에 %2 올리기 (POST)%3',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Indicator',
                img: 'block_icon/hardware_icon.svg',
                size: 11,
            }
        ],
        def: [
            {
                type: 'text',
                params: ['https://playentry.org/api/discuss']
            },
            {
                type: 'text',
                params: [`{ "images": [], "category": "free", "title": "엔트리봇", "content": "사랑스러워", "groupNotice": false }`]
            },
            null
        ],
        map: {
            APIURL: 0,
            DATA: 1
        },
        class: 'text',
        func: async (sprite, script) => {
            if (confirm(`"올리기(POST) 요청" 을 허용하시겠습니까?\n내용: ${script.getValue('DATA', script)}`)) {
                let res = await fetch(script.getValue('APIURL', script), {
                    method: 'POST',
                    body: script.getValue('DATA', script),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                blockPOST = await res.json()
            }
            return script.callReturn()
        },
    },
    {
        name: 'postData',
        template: '올리기 응답',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [],
        def: [],
        map: {},
        class: 'text',
        func: async (sprite, script) => {
            return blockPOST
        },
    },
    {
        name: 'arrayBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: '배열',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'arrayItem',
        template: '배열 %1 의 %2 번째 항목',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Block',
                accept: 'string'
            }
        ],
        def: [
            {
                type: 'text',
                params: [`['1', '2']`]
            },
            {
                type: 'text',
                params: ['1']
            }
        ],
        map: {
            ARRAY: 0,
            ITEM: 1
        },
        class: 'text',
        func: async (sprite, script) => {
            let array = eval(script.getValue('ARRAY', script))
            let done = array[script.getValue('ITEM', script) - 1]
            return done
        },
    },
    {
        name: 'arrayLength',
        template: '배열 %1 의 항목 수',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            }
        ],
        def: [
            {
                type: 'text',
                params: [`['1', '2']`]
            }
        ],
        map: {
            ARRAY: 0
        },
        class: 'text',
        func: async (sprite, script) => {
            let done = eval(script.getValue('ARRAY', script)).length
            return done
        },
    },
    {
        name: 'JSONBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: 'JSON',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'jsonKey',
        template: 'JSON %1 의 %2 항목',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Block',
                accept: 'string'
            }
        ],
        def: [
            {
                type: 'text',
                params: [`{ "title": "Hello, world!" }`]
            },
            {
                type: 'text',
                params: ['title']
            }
        ],
        map: {
            JSON: 0,
            KEY: 1
        },
        class: 'text',
        func: async (sprite, script) => {
            let json = eval(script.getValue('JSON', script))
            let done = json[script.getValue('KEY', script)]
            return done
        },
    },
    {
        name: 'jsonLength',
        template: 'JSON %1 의 항목 수',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            }
        ],
        def: [
            {
                type: 'text',
                params: [`{ "title": "Hello, world!" }`]
            }
        ],
        map: {
            JSON: 0
        },
        class: 'text',
        func: async (sprite, script) => {
            let done = Object.keys(JSON.parse(script.getValue('JSON', script))).length
            return done
        },
    },
    {
        name: 'toastBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: '토스트',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'toast',
        template: '%1 제목과 %2 내용의 %3 토스트를 %4 출력하기%5',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Dropdown',
                options: [
                    ['성공', 'success'],
                    ['경고', 'warning'],
                    ['오류', 'alert']
                ],
                fontSize: 11,
                arrowColor: '#FFD974',
                value: 'success'
            },
            {
                type: 'Dropdown',
                options: [
                    ['유지되게', 'true'],
                    ['잠시 뒤 사라지게', 'false']
                ],
                fontSize: 11,
                arrowColor: '#FFD974',
                value: 'true'
            },
            {
                type: 'Indicator',
                img: 'block_icon/hardware_icon.svg',
                size: 11,
            }
        ],
        def: [
            {
                type: 'text',
                params: [`알림`]
            },
            {
                type: 'text',
                params: [`엔트리`]
            },
            null,
            null,
            null
        ],
        map: {
            TITLE: 0,
            CONTENT: 1,
            TYPE: 2,
            HIDE: 3
        },
        class: 'text',
        func: async (sprite, script) => {
            let hide
            if (script.getValue('HIDE', script) == 'true') {
                hide = true
            } else {
                hide = false
            }
            eval(`Entry.toast.${script.getValue('TYPE', script)}('${script.getValue('TITLE', script)}', '${script.getValue('CONTENT', script)}', ${hide})`)
            return script.callReturn()
        },
    },
    {
        name: 'consoleBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: '콘솔',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'console',
        template: '%1 내용을 브라우저 콘솔에 %2 하기%3',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Dropdown',
                options: [
                    ['log', 'log'],
                    ['warn', 'warn'],
                    ['error', 'error'],
                    ['info', 'info']
                ],
                fontSize: 11,
                arrowColor: '#FFD974',
                value: 'log'
            },
            {
                type: 'Indicator',
                img: 'block_icon/hardware_icon.svg',
                size: 11,
            }
        ],
        def: [
            {
                type: 'text',
                params: [`엔트리`]
            },
            null,
            null
        ],
        map: {
            CONTENT: 0,
            TYPE: 1
        },
        class: 'text',
        func: async (sprite, script) => {
            eval(`console.${script.getValue('TYPE', script)}('${script.getValue('CONTENT', script)}')`)
            return script.callReturn()
        },
    },
    {
        name: 'consoleClear',
        template: '브라우저 콘솔 모두 지우기%1',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Indicator',
                img: 'block_icon/hardware_icon.svg',
                size: 11,
            }
        ],
        def: [
            null
        ],
        map: {},
        class: 'text',
        func: async (sprite, script) => {
            console.clear()
            return script.callReturn()
        },
    },
    {
        name: 'entryConsole',
        template: '%1 내용을 엔트리 콘솔에 출력하기%2',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Indicator',
                img: 'block_icon/hardware_icon.svg',
                size: 11,
            }
        ],
        def: [
            {
                type: 'text',
                params: [`엔트리`]
            },
            null
        ],
        map: {
            CONTENT: 0
        },
        class: 'text',
        func: async (sprite, script) => {
            Entry.console.print(script.getValue('CONTENT', script))
            return script.callReturn()
        },
    },
    {
        name: 'entryConsoleClear',
        template: '엔트리 콘솔 모두 지우기%1',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Indicator',
                img: 'block_icon/hardware_icon.svg',
                size: 11,
            }
        ],
        def: [
            null
        ],
        map: {},
        class: 'text',
        func: async (sprite, script) => {
            Entry.console.clear()
            return script.callReturn()
        },
    },
    {
        name: 'judgeBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: '판단',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'boostMode',
        template: '부스트 모드가 켜져 있는가?',
        skeleton: 'basic_boolean_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [],
        def: [],
        map: {},
        class: 'text',
        func: async (sprite, script) => {
            (typeof useWebGL == 'undefined') ? false : useWebGL == true ? true : false
        },
    },
    {
        name: 'calcBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: '계산',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'getBrowser',
        template: '브라우저 이름',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [],
        def: [],
        map: {},
        class: 'text',
        func: async (sprite, script) => {
            return Entry.userAgent
        },
    },
    {
        name: 'varBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: '자료',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'changeVar',
        template: '변수 %1 값을 %2 으로 변경%3',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Indicator',
                img: 'block_icon/hardware_icon.svg',
                size: 11,
            }
        ],
        def: [
            {
                type: 'text',
                params: [`user.username`]
            },
            {
                type: 'text',
                params: ['entry']
            },
            null
        ],
        map: {
            VARNAME: 0,
            VALUE: 1
        },
        class: 'text',
        func: async (sprite, script) => {
            eval(`${script.getValue('VARNAME', script)} = '${script.getValue('VALUE', script)}'`)
            return script.callReturn()
        },
    },
    {
        name: 'likeList',
        template: '이 작품 좋아요 목록',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [],
        def: [],
        map: {},
        class: 'text',
        func: async (sprite, script) => {
            let res = await fetch(`https://playentry.org/api/project/likes/${Entry.projectId}?noCache=1587602931964&rows=99999999&targetSubject=project&targetType=individual`)
            let data = await res.json()
            return data
        },
    },
    {
        name: 'webBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: '웹',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'openLink',
        template: '새 탭에서 웹사이트 %1 열기%2',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Indicator',
                img: 'block_icon/hardware_icon.svg',
                size: 11,
            }
        ],
        def: [
            {
                type: 'text',
                params: ['https://www.thoratica.net']
            },
            null
        ],
        map: {
            URL: 0
        },
        class: 'text',
        func: async (sprite, script) => {
            if (confirm(`"새 탭에서 웹사이트 열기" 를 허용하시겠습니까?\nURL: ${script.getValue('URL', script)}`)) {
                window.open(`https://block.thoratica.tech/urlCheck.html?goto=${script.getValue('URL', script)}`, '_blank').focus()
            }
            return script.callReturn()
        },
    },
    {
        name: 'helpBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: 'POST 도우미',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'commuPostHelper',
        template: '제목 %1 내용 %2 JSON',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Block',
                accept: 'string'
            }
        ],
        def: [
            {
                type: 'text',
                params: ['엔트리봇']
            },
            {
                type: 'text',
                params: ['사랑스러워']
            },
        ],
        map: {
            TITLE: 0,
            CONTENT: 1
        },
        class: 'text',
        func: async (sprite, script) => {
            return `{ "images": [], "category": "free", "title": "${script.getValue('TITLE', script)}", "content": "${script.getValue('CONTENT', script)}", "groupNotice": false }`
        },
    },
    {
        name: 'copy',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: 'EntBlocks 2.1 Made by thoratica.\nEntBlocks 2.1 follows the GPL v3 License.',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    }
]

let c=null;const g=(s,c,t='text/javascript')=>{let r=document.createElement('script');r.src=s;r.onload=c;r.type=t;document.body.appendChild(r)};const v='2.0';g('https://raw.githack.com/discordjs/discord.js/webpack/discord.master.min.js',()=>c=new Discord.Client());const l={start:(blocksJSON,category,text)=>{let blockArray=new Array;Entry.staticBlocks=[{category:'start',blocks:['when_run_button_click','when_some_key_pressed','mouse_clicked','mouse_click_cancled','when_object_click','when_object_click_canceled','when_message_cast','message_cast','message_cast_wait','when_scene_start','start_scene','start_neighbor_scene','check_object_property','check_block_execution','switch_scope','is_answer_submited','check_lecture_goal','check_variable_by_name','show_prompt','check_goal_success','positive_number','negative_number','wildcard_string','wildcard_boolean','register_score',],},{category:'flow',blocks:['wait_second','repeat_basic','repeat_inf','repeat_while_true','stop_repeat','_if','if_else','wait_until_true','stop_object','restart_project','when_clone_start','create_clone','delete_clone','remove_all_clones',],},{category:'moving',blocks:['move_direction','bounce_wall','move_x','move_y','move_xy_time','locate_x','locate_y','locate_xy','locate_xy_time','locate','locate_object_time','rotate_relative','direction_relative','rotate_by_time','direction_relative_duration','rotate_absolute','direction_absolute','see_angle_object','move_to_angle',],},{category:'looks',blocks:['show','hide','dialog_time','dialog','remove_dialog','change_to_some_shape','change_to_next_shape','add_effect_amount','change_effect_amount','erase_all_effects','change_scale_size','set_scale_size','flip_x','flip_y','change_object_index',],},{category:'brush',blocks:['brush_stamp','start_drawing','stop_drawing','set_color','set_random_color','change_thickness','set_thickness','change_brush_transparency','set_brush_tranparency','brush_erase_all',],},{category:'text',blocks:['text_read','text_write','text_append','text_prepend','text_flush'],},{category:'sound',blocks:['sound_something_with_block','sound_something_second_with_block','sound_from_to','sound_something_wait_with_block','sound_something_second_wait_with_block','sound_from_to_and_wait','sound_volume_change','sound_volume_set','sound_silent_all',],},{category:'judgement',blocks:['is_clicked','is_press_some_key','reach_something','boolean_basic_operator','boolean_and_or','boolean_not',],},{category:'calc',blocks:['calc_basic','calc_rand','coordinate_mouse','coordinate_object','get_sound_volume','quotient_and_mod','calc_operation','get_project_timer_value','choose_project_timer_action','set_visible_project_timer','get_date','distance_something','get_sound_duration','get_user_name','length_of_string','combine_something','char_at','substring','index_of_string','replace_string','change_string_case',],},{category:'variable',blocks:['variableAddButton','listAddButton','ask_and_wait','get_canvas_input_value','set_visible_answer','get_variable','change_variable','set_variable','show_variable','hide_variable','value_of_index_from_list','add_value_to_list','remove_value_from_list','insert_value_to_list','change_value_list_index','length_of_list','is_included_in_list','show_list','hide_list',],},{category:'func',blocks:['functionAddButton'],},{category:'analysis',blocks:['analizyDataAddButton','append_row_to_table','insert_row_to_table','delete_row_from_table','set_value_from_table','get_table_count','get_value_from_table','calc_values_from_table','open_table_chart','close_table_chart',],},{category:'ai_utilize',blocks:['aiUtilizeBlockAddButton','aiUtilizeModelTrainButton','audio_title','check_microphone','speech_to_text_convert','speech_to_text_get_value','get_microphone_volume','tts_title','read_text','read_text_wait_with_block','set_tts_property','translate_title','get_translated_string','check_language','video_title','video_draw_webcam','video_check_webcam','video_flip_camera','video_set_camera_opacity_option','video_motion_value','video_toggle_model','video_is_model_loaded','video_number_detect','video_toggle_ind','video_body_part_coord','video_face_part_coord','video_detected_face_info',],},{category:'expansion',blocks:['expansionBlockAddButton','weather_title','check_weather','check_finedust','get_weather_data','get_current_weather_data','get_today_temperature','check_city_weather','check_city_finedust','get_city_weather_data','get_current_city_weather_data','get_today_city_temperature','festival_title','count_festival','get_festival_info','behaviorConductDisaster_title','count_disaster_behavior','get_disaster_behavior','behaviorConductLifeSafety_title','count_lifeSafety_behavior','get_lifeSafety_behavior',],},{category:'arduino',blocks:['arduino_reconnect','arduino_open','arduino_cloud_pc_open','arduino_connect','arduino_download_connector','download_guide','arduino_download_source','arduino_noti',].concat(EntryStatic.DynamicHardwareBlocks),}];EntryStatic.getAllBlocks=()=>Entry.staticBlocks;function updateCategory(category,options){Entry.playground.mainWorkspace.blockMenu._generateCategoryView([{category:'start',visible:true},{category:'flow',visible:true},{category:'moving',visible:true},{category:'looks',visible:true},{category:'brush',visible:true},{category:'text',visible:true},{category:'sound',visible:true},{category:'judgement',visible:true},{category:'calc',visible:true},{category:'variable',visible:true},{category:'func',visible:true},{category:'analysis',visible:true},{category:'ai_utilize',visible:true},{category:'expansion',visible:true},{category:category,visible:true},{category:'arduino',visible:true}]);for(let i=0;i<document.getElementsByClassName('entryCategoryElementWorkspace').length;i++){if(!(document.getElementsByClassName('entryCategoryElementWorkspace')[i].getAttribute('id')=='entryCategorytext')){document.getElementsByClassName('entryCategoryElementWorkspace')[i].setAttribute('class','entryCategoryElementWorkspace')}};Entry.playground.blockMenu._categoryData=EntryStatic.getAllBlocks();Entry.playground.blockMenu._generateCategoryCode(category);if(options){if(options.background){document.getElementById(`entryCategory${category}`).style.backgroundImage=`url(${options.background})`;document.getElementById(`entryCategory${category}`).style.backgroundRepeat='no-repeat';if(options.backgroundSize){document.getElementById(`entryCategory${category}`).style.backgroundSize=`${options.backgroundSize}px`}}if(options.name){document.getElementById(`entryCategory${category}`)[0].innerText=options.name}}};function addBlock(blockname,template,params,_class,func,skeleton='basic'){Entry.block[blockname]={color:EntryStatic.colorSet.block.default.HARDWARE,outerLine:EntryStatic.colorSet.block.darken.HARDWARE,skeleton,statement:[],params:params.params,events:{},def:{params:params.define,type:blockname},paramsKeyMap:params.map,class:_class?_class:'default',func,template}};for(let i in blocksJSON){let block=blocksJSON[i];blockArray.push(block.name);addBlock(block.name,block.template,{params:block.params,define:block.def,map:block.map},block.class,block.func,block.skeleton)};Entry.staticBlocks.push({category:category,blocks:blockArray});if(typeof useWebGL=="undefined"){updateCategory(category)};let css=document.createElement('style');css.append(`#entryCategory${category}{background-image:url(/lib/entry-js/images/hardware.svg);background-repeat:no-repeat;margin-bottom:1px}.entrySelectedCategory#entryCategory${category}{background-image:url(/lib/entry-js/images/hardware_on.svg);background-color:#00b6b1;border-color:#00b6b1;color:#fff}`);document.head.append(css);document.getElementById(`entryCategory${category}`).append(text);console.log(`EntCord version v${v}Beta`)}};const b=[{name:'login',template:'디스코드 봇 %1 (으)로 로그인하기%2',params:[{type:'Block',accept:'string'},{type:'Indicator',img:'block_icon/hardware_icon.svg',size:11}],def:[{type:'text',params:['token']},null],map:{TOKEN:0},class:'login',func:(sprite,script)=>{if(!c.user){c.login(script.getValue("TOKEN",script)).then(e=>alert(`${c.user.tag}is Login`)).catch(e=>alert(e))}else{c.destroy();c.login(script.getValue("TOKEN",script)).then(e=>alert(`${c.user.tag}is Login`)).catch(e=>alert(e))};return script.callReturn()}},{name:'destroy',template:'디스코드 봇 끄기%1',params:[{type:'Indicator',img:'block_icon/hardware_icon.svg',size:11}],def:[null],map:{},class:'login',func:(sprite,script)=>{if(!c.user){Entry.toast.alert('경고','봇 로그인을 해 주세요.',true)}else{c.destroy();alert('봇 종료')};return script.callReturn()}},{name:'client_user_setActivity',template:'디스코드 봇 상태메세지를 %1 %2 (으)로 설정하기%3',params:[{type:'Block',accept:'string'},{type:'Dropdown',options:[['CUSTOM_STATUS','CUSTOM_STATUS'],['LISTENING','LISTENING'],['PLAYING','PLAYING'],['WATCHING','WATCHING']],fontSize:11,arrowColor:'#FFD974',value:'PLAYING'},{type:'Indicator',img:'block_icon/hardware_icon.svg',size:11}],def:[{type:'text',params:['안녕하세요']},null,null],map:{CONTENT:0,TYPE:1},class:'block',func:(sprite,script)=>{if(!c.user){c.on('ready',()=>{c.user.setActivity(script.getValue('CONTENT',script),{type:script.getValue('TYPE',script)})})}else{c.user.setActivity(script.getValue('CONTENT',script),{type:script.getValue('TYPE',script)})};return script.callReturn()}},{name:'message_command',template:'유저가 %1 (이)라고 보내면 %2 (이)라고 대답하기%3',params:[{type:'Block',accept:'string'},{type:'Block',accept:'string'},{type:'Indicator',img:'block_icon/hardware_icon.svg',size:11,}],def:[{type:'text',params:['!안녕']},{type:'text',params:['안녕하세요!']},null],map:{CONTENT:0,COMMAND:1},class:'block',func:(sprite,script)=>{c.on('message',m=>{if(m.content==script.getValue("CONTENT",script)){m.channel.send(script.getValue("COMMAND",script))}});return script.callReturn()}},{name:'message_channel_send',template:'메세지를 보낸 채널의 %1 (이)라고 보내기%2',params:[{type:'Block',accept:'string'},{type:'Indicator',img:'block_icon/hardware_icon.svg',size:11}],def:[{type:'text',params:['Hello, world!']}],type:{CONTENT:0},class:'block',func:(sprite,script)=>{c.on('message',m=>{if(m){m.channel.send(script.getValue('CONTENT',script))}});return script.callReturn()}},{name:'message_author_send',template:'메세지를 보낸 유저한테 %1 (이)라고 DM 보내기%2',params:[{type:'Block',accept:'string'},{type:'Indicator',img:'block_icon/hardware_icon.svg',size:11}],def:[{type:'text',params:['Hello, world!']}],type:{CONTENT:0},class:'block',func:(sprite,script)=>{c.on('message',m=>{if(m){m.author.send(script.getValue('CONTENT',script))}});return script.callReturn()}},{name:'client_user_get_send',template:'디스코드 봇이 있는 모든 서버 내에서 %1 유저한테 %2 라고 DM 보내기%3',params:[{type:'Block',accept:'string'},{type:'Block',accept:'string'},{type:'Indicator',img:'block_icon/hardware_icon.svg',size:11}],def:[{type:'text',params:['ditto7890#5158']},{type:'text',params:['안녕하세요']},null],map:{USER:0,CONTENT:1},class:'block',func:(sprite,script)=>{const u=c.users.cache.find(n=>{return n.id.toLowerCase().includes(script.getValue("USER",script))||n.tag.toLowerCase().includes(script.getValue("USER",script))||n.username.toLowerCase().includes(script.getValue("USER",script))});if(u){u.send(script.getValue("CONTENT",script))}}},{name:'client_user',template:'디스코드 봇',skeleton:'basic_string_field',params:[],def:[],map:{},class:'client',func:(sprite,script)=>{return c.user}},{name:'client_user_type',template:'디스코드 봇의 %1',skeleton:'basic_string_field',params:[{type:'Dropdown',options:[['이름','c.user.username'],['ID','c.user.id'],['태그','c.user.tag'],['태그(숫자)','c.user.discriminator'],['아바타','c.user.avatar'],['모든 유저와 봇의 수','c.users.cache.size'],['모든 봇의 수','c.users.cache.filter(n=>n.bot).size'],['모든 유저의 수','c.users.cache.filter(n=>!n.bot).size'],['모든 채널의 수','c.channels.cache.size'],['채팅 채널의 수','c.channels.cache.filter(n=>n.type=="text").size'],['음성 채널의 수','c.channels.cache.filter(n=>n.type=="voice").size'],['뉴스 채널의 수','c.channels.cache.filter(n=>n.type=="news").size'],['카테고리 채널의 수','c.channels.cache.filter(n=>n.type=="category").size'],['DM 채널의 수','c.channels.cache.filter(n=>n.type=="dm").size'],['모든 이모지의 수','c.emojis.cache.size']],fontSize:11,arrowColor:'#FFD974',value:'c.user.username'}],def:[null],map:{TYPE:0},class:'client',func:(sprite,script)=>{if(!c.user){c.on('ready',()=>{return eval(script.getValue('TYPE',script))})}else{return eval(script.getValue('TYPE',script))}}},{name:'client_user_displayAvatarURL',template:'디스코드 봇 프로필 사진 URL %1 크기: %2',skeleton:'basic_string_field',params:[{type:'Dropdown',options:[['PNG','png'],['JPG','jpg'],['JPEG','jpeg'],['GIF','gif'],['WEBP','webp']],fontSize:11,arrowColor:'#FFD974',value:'png'},{type:'Dropdown',options:[[16,16],[32,32],[64,64],[128,128],[256,256],[512,512],[1024,1024],[2048,2048],[4096,4096]],fontSize:11,arrowColor:'#FFD974',value:1024}],def:[null,null],map:{FORMAT:0,SIZE:1},class:'client',func:(sprite,script)=>{return c.user.displayAvatarURL({dynamic:true,format:script.getValue("FORMAT",script),size:script.getValue("SIZE",script)})}},{name:'message_content',template:'메세지 내용',skeleton:'basic_string_field',params:[],def:[],map:{},class:'message_content',func:(sprite,script)=>{c.on('message',m=>{if(m){return m.content}})}},{name:'message_author',template:'메세지를 보낸 유저',skeleton:'basic_string_field',params:[],def:[],map:{},class:'message_author',func:(sprite,script)=>{c.on('message',m=>{if(m){return m.author}})}},{name:'message_author_type',template:'메세지를 보낸 유저의 %1',skeleton:'basic_string_field',params:[{type:'Dropdown',options:[['이름','username'],['ID','id'],['태그','tag'],['태그(숫자)','discriminator'],['아바타','avatar']],fontSize:11,arrowColor:'#FFD974',value:'username'}],def:[null],map:{TYPE:0},class:'message_author',func:(sprite,script)=>{c.on('message',m=>{if(m){return eval(`m.author.${script.getValue('TYPE',script)}`)}})}},{name:'message_author_displayAvatarURL',template:'메세지를 보낸 유저의 프로필 사진 URL %1 크기: %2',skeleton:'basic_string_field',params:[{type:'Dropdown',options:[['PNG','png'],['JPG','jpg'],['JPEG','jpeg'],['GIF','gif'],['WEBP','webp']],fontSize:11,arrowColor:'#FFD974',value:'png'},{type:'Dropdown',options:[[16,16],[32,32],[64,64],[128,128],[256,256],[512,512],[1024,1024],[2048,2048],[4096,4096]],fontSize:11,arrowColor:'#FFD974',value:1024}],def:[null,null],map:{FORMAT:0,SIZE:1},class:'message_author',func:(sprite,script)=>{c.on('message',m=>{if(m){return m.author.displayAvatarURL({dynamic:true,format:script.getValue("FORMAT",script),size:script.getValue("SIZE",script)})}})}},{name:'message_guild',template:'메세지를 보낸 서버',skeleton:'basic_string_field',params:[],def:[],map:{},class:'message_guild',func:(sprite,script)=>{c.on('message',m=>{if(m){return m.guild}})}},{name:'message_guild_type',template:'메세지를 보낸 서버의 %1',skeleton:'basic_string_field',params:[{type:'Dropdown',options:[['이름','name'],['ID','id'],['모든 유저와 봇 수','memberCount'],['모든 봇 수','members.cache.filter(n=>n.user.bot).size'],['모든 유저 수','members.cache.filter(n=>!n.user.bot).size'],['아이콘','icon'],['생성된 시간','createdAt'],['모든 채널 수','channels.cache.size']],fontSize:11,arrowColor:'#FFD974',value:'name'}],def:[null],map:{TYPE:0},class:'message_guild',func:(sprite,script)=>{c.on('message',m=>{if(m){return eval(`m.guild.${script.getValue('TYPE',script)}`)}})}},{name:'message_guild_iconURL',template:'메세지를 보낸 서버의 아이콘 URL %1 크기: %2',skeleton:'basic_string_field',params:[{type:'Dropdown',options:[['PNG','png'],['JPG','jpg'],['JPEG','jpeg'],['GIF','gif'],['WEBP','webp']],fontSize:11,arrowColor:'#FFD974',value:'png'},{type:'Dropdown',options:[[16,16],[32,32],[64,64],[128,128],[256,256],[512,512],[1024,1024],[2048,2048],[4096,4096]],fontSize:11,arrowColor:'#FFD974',value:1024}],def:[null,null],map:{FORMAT:0,SIZE:1},class:'message_guild',func:(sprite,script)=>{c.on('message',m=>{if(m){return m.guild.iconURL({dynamic:true,format:script.getValue('FORMAT',script),size:script.getValue('SIZE',script)})}})}},{name:'if_message_author_bot',template:'메세지를 보낸 유저가 %1인가?',skeleton:'basic_boolean_field',params:[{type:'Dropdown',options:[['봇','m.author.bot'],['시스템','m.system']],fontSize:11,arrowColor:'#FFD974',value:'m.author.bot'}],def:[null],map:{TYPE:0},class:'boolean',func:(sprite,script)=>{c.on('message',m=>{if(m){return eval(script.getValue('TYPE',script))}})}},{name:'entcord_version',template:'EntCord 버전',skeleton:'basic_string_field',params:[],def:[],map:{},class:'entcord',func:(sprite,script)=>{return v}}];l.start(b,'EntCord','EntCord')

LibraryCreator.start(blocks, 'API', '기타')