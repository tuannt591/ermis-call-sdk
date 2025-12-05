// Re-export toàn bộ types và classes từ file gốc
export * from './ermis_call_node_wasm.js';

// Import init function mặc định
import initWasm, { InitInput } from './ermis_call_node_wasm.js';

/**
 * Hàm khởi tạo SDK.
 * Cần được gọi trước khi sử dụng bất kỳ class nào (ví dụ: ErmisCall).
 * @param source (Optional) Đường dẫn hoặc URL tới file .wasm
 */
export async function initializeErmisSDK(source?: InitInput): Promise<void> {
    try {
        await initWasm(source);
        console.log('🚀 Ermis SDK initialized successfully');
    } catch (error) {
        console.error('❌ Failed to initialize Ermis SDK:', error);
        throw error;
    }
}

export default initWasm;