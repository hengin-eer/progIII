try {
    nonExistingFunction();
    console.log("nonExistingFunctionでの冷害により、実行されません");
} catch (error) {
    console.error("nonExistingFunctionは存在しません！");
    console.error("error type: " + error.name);
    console.error("error message: " + error.message);
} finally {
    console.log("後処理の記述");
}

console.log("エラーが発生してもこのスクリプトは実行されます");