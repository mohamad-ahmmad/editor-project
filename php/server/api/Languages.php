
<?php
class Executor
{

    public function execute($lang, $code)
    {
        return
            $lang->run($code);
    }
}

class NodeLang
{

    private function validate($code)
    {
    }

    //@return String
    public function run($code)
    {
        $tempFile = fopen("temp.js", "w");
        fwrite($tempFile, $code);

        $consoleCompiled = `node temp.js`;
        unlink('temp.js');

        return $consoleCompiled;
    }
}

class PythonLang
{


    private function validate($code)
    {
    }

    //@return String
    public function run($code)
    {
        $tempFile = fopen("temp.py", "w");
        fwrite($tempFile, $code);

        $consoleCompiled = `python temp.py`;

        return $consoleCompiled;
    }
}
